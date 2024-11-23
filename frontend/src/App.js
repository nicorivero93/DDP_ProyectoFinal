import React from 'react';
import { BrowserRouter as Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Rol from './components/Rol';
import News from './components/News';
import Contact from './components/Contact';
import CharacterSheet from './components/CharacterSheet';

function App() {
    const location = useLocation(); // Hook de react-router-dom para obtener la ubicación actual

    // Ocultar Navbar en Login y Registro
    const showNavbar = !(location.pathname === "/" || location.pathname === "/register");

    return (
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/rol" element={<Rol />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/character" element={<CharacterSheet />} />
            </Routes>
        </>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
