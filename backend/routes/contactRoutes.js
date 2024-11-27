import express from 'express';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, message } = req.body;

    console.log("Datos recibidos:", req.body); // Agrega esta línea
    console.log('Credenciales:', process.env.EMAIL_USER, process.env.EMAIL_PASS);


    if (!email || !message) {
        return res.status(400).send('Faltan datos obligatorios');
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Cambia si usas otro proveedor
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    transporter.verify((error, success) => {
        if (error) {
            console.error('Error en la configuración de transporte:', error);
        } else {
            console.log('Servidor listo para enviar correos');
        }
    });
    
    

    const mailOptions = {
        from: email,
        to: 'lucasrivero93@gmail.com',
        subject: 'Nueva consulta desde Contacto',
        text: `Mensaje de: ${email}\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Mensaje enviado con éxito');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el mensaje');
    }
});

export default router;
