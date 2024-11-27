import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/rol">Rol</Link></li>
                <li><Link to="/NovedadesPage">Novedades</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/character">Hoja de Personaje</Link></li>                
            </ul>
        </nav>
    );
}

export default Navbar;
