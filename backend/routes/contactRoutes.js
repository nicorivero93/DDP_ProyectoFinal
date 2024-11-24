import express from 'express';
import contactController from '../controllers/contactController.js';

const router = express.Router();

// Ruta para enviar correos electrónicos
router.post('/', contactController.sendEmail);

export default router;
