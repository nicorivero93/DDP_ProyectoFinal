import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/contact', { email, message });
            alert('Mensaje enviado con éxito');
        } catch (error) {
            alert('Error al enviar el mensaje');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contacto</h2>
            <input
                type="email"
                placeholder="Tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Contact;
