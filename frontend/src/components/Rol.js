import React from 'react';

function Rol() {
    const rollDice = () => {
        const result = Math.floor(Math.random() * 20) + 1;
        alert(`Tiraste un dado y sacaste: ${result}`);
    };

    return (
        <div>
            <h2>Rol</h2>
            <img src="/public/images/mapa.png" alt="Mapa de juego" style={{ width: '100%' }} />
            <button onClick={rollDice}>Tirar Dado</button>
        </div>
    );
}

export default Rol;
