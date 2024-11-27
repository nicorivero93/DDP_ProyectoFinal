import React, { useState } from 'react';

function Rol() {
    const [diceRolls, setDiceRolls] = useState([]);
    const [numDice, setNumDice] = useState(1); // Cantidad de dados
    const [numSides, setNumSides] = useState(6); // Cantidad de caras del dado

    const rollDice = () => {
        const results = Array.from({ length: numDice }, () => Math.floor(Math.random() * numSides) + 1);
        setDiceRolls(results);
    };

    return (
        <div className="rol-container">
            <h1>Tiradas de Dados</h1>
            <div className="settings">
                <label>
                    Cantidad de Dados:
                    <select value={numDice} onChange={(e) => setNumDice(Number(e.target.value))}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Caras del Dado:
                    <select value={numSides} onChange={(e) => setNumSides(Number(e.target.value))}>
                        {[3, 6, 10, 20].map((sides) => (
                            <option key={sides} value={sides}>
                                {sides}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button onClick={rollDice}>Lanzar Dados</button>
            <div className="results">
                {diceRolls.map((roll, index) => (
                    <span key={index} className="dice-roll">
                        🎲 {roll}
                    </span>
                ))}
            </div>
            <div>
                <h2>Rol</h2>
                <img src="/images/mapa.png" alt="Mapa de juego" style={{ width: '100%' }} />
            </div>
        </div>
    );
}

export default Rol;
