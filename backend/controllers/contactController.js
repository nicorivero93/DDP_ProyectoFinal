import nodemailer from 'nodemailer';

const contactController = {
    sendEmail: async (req, res) => {
        const { email, message } = req.body;

        // Configuración de Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Tu correo electrónico
                pass: process.env.EMAIL_PASS  // Tu contraseña de aplicación
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: 'Nuevo mensaje de contacto',
            text: message
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send('Correo enviado con éxito');
        } catch (error) {
            res.status(500).send('Error al enviar el correo');
        }
    }
};

export default contactController;
