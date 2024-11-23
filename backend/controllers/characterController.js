const Character = require('../models/Character');

const characterController = {
    create: (req, res) => {
        const { userId, name, attributes } = req.body;
        Character.create(userId, name, attributes, (err, result) => {
            if (err) return res.status(500).send('Error al crear el personaje');
            res.status(201).send('Personaje creado con éxito');
        });
    },
    getAllByUser: (req, res) => {
        const { userId } = req.params;
        Character.findByUser(userId, (err, results) => {
            if (err) return res.status(500).send('Error al obtener personajes');
            res.status(200).json(results);
        });
    },
    update: (req, res) => {
        const { id } = req.params;
        const { attributes } = req.body;
        Character.update(id, attributes, (err, result) => {
            if (err) return res.status(500).send('Error al actualizar el personaje');
            res.status(200).send('Personaje actualizado con éxito');
        });
    }
};

module.exports = characterController;
