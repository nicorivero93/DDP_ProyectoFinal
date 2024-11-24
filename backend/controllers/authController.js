import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import db from '../db.js'; // Conexión a la base de datos

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
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);

            if (user.length === 0) {
                return res.status(401).json({ message: 'Usuario no encontrado' });
            }

            const validPassword = await bcrypt.compare(password, user[0].password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }

            const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
};

module.exports = authController;
