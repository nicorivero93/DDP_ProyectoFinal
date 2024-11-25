import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rol from './components/Rol';
import NovedadesPage from './components/NovedadesPage';
import Contact from './components/Contact';
import CharacterSheet from './components/CharacterSheet';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/rol" element={<Rol />} /> {/* Página principal */}
                <Route path="/novedadespage" element={<NovedadesPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/character" element={<CharacterSheet />} />
            </Routes>
        </>
    );
}


export default App;


