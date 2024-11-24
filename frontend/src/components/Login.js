import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Intento de inicio de sesión:', { email, password });
    // Aquí puedes añadir lógica para enviar los datos al backend

    try {
        const response = await axios.post('http://localhost:5000/auth/login', {
            email,
            password
        });

        alert('Login exitoso');
        localStorage.setItem('token', response.data.token);
        window.location.href = '/rol';
    } catch (error) {
        alert(error.response?.data?.message || 'Error al iniciar sesión');
    }


    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Iniciar Sesión</button>
            <p>
                ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
            </p>
        </form>
    );
}
}

export default Login;
