import React, { useState } from 'react';
import axios from 'axios';

function CharacterSheet() {
    const [name, setName] = useState('');
    const [attributes, setAttributes] = useState({ strength: 0, agility: 0, intelligence: 0 });

    const handleSave = async () => {
        try {
            await axios.post('http://localhost:5000/characters', {
                userId: 1, // Cambiar al ID real del usuario logueado
                name,
                attributes
            });
            alert('Personaje guardado con éxito');
        } catch (error) {
            alert('Error al guardar el personaje');
        }
    };

    return (
        <div>
            <h2>Hoja de Personaje</h2>
            <input type="text" placeholder="Nombre del personaje" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Fuerza" value={attributes.strength} onChange={(e) => setAttributes({ ...attributes, strength: e.target.value })} />
            <input type="number" placeholder="Agilidad" value={attributes.agility} onChange={(e) => setAttributes({ ...attributes, agility: e.target.value })} />
            <input type="number" placeholder="Inteligencia" value={attributes.intelligence} onChange={(e) => setAttributes({ ...attributes, intelligence: e.target.value })} />
            <button onClick={handleSave}>Guardar</button>
        </div>
    );
}

export default CharacterSheet;
