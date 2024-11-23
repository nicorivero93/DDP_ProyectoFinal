const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authController = {
    register: (req, res) => {
        const { email, password } = req.body;
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return res.status(500).send('Error en la encriptación');
            User.create(email, hash, (err, result) => {
                if (err) return res.status(400).send('Usuario ya registrado');
                res.status(201).send('Usuario registrado con éxito');
            });
        });
    },
    login: (req, res) => {
        const { email, password } = req.body;
        User.findByEmail(email, (err, results) => {
            if (err || results.length === 0) return res.status(404).send('Usuario no encontrado');
            const user = results[0];
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err || !isMatch) return res.status(401).send('Credenciales inválidas');
                const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
                res.status(200).json({ token });
            });
        });
    }
};

module.exports = authController;
