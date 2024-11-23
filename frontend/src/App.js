import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Rol from './components/Rol';
import News from './components/News';
import Contact from './components/Contact';
import CharacterSheet from './components/CharacterSheet';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/rol" element={<Rol />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/character" element={<CharacterSheet />} />
            </Routes>
        </Router>
    );
}

export default App;
