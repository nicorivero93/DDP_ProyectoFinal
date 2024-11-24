import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Rol from './components/Rol';
import News from './components/News';
import Contact from './components/Contact';
import CharacterSheet from './components/CharacterSheet';

function App() {
    const location = useLocation(); // Hook para obtener la ruta actual

    // Mostrar u ocultar Navbar según la ruta
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

export default App;


