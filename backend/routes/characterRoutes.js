const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

// Crear un nuevo personaje
router.post('/', characterController.create);

// Obtener personajes por usuario
router.get('/:userId', characterController.getAllByUser);

// Actualizar un personaje
router.put('/:id', characterController.update);

module.exports = router;