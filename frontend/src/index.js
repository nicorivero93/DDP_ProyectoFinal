import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css'; // Asegúrate de que el estilo esté correctamente importado
import AppWrapper from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppWrapper />
    </React.StrictMode>
);
