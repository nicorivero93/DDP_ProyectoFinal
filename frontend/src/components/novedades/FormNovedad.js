import React, { useState } from 'react';
import axios from 'axios';

const FormNovedad = ({ onClose, onAdd, data = {} }) => {
    const [titulo, setTitulo] = useState(data.titulo || '');
    const [subtitulo, setSubtitulo] = useState(data.subtitulo || '');
    const [cuerpo, setCuerpo] = useState(data.cuerpo || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            titulo,
            subtitulo,
            cuerpo,
        };
    
        try {
            let response;
            if (data.id) {
                // Editar novedad
                response = await axios.put(`http://localhost:5000/api/novedades/${data.id}`, formData);
            } else {
                // Crear nueva novedad
                response = await axios.post('http://localhost:5000/api/novedades', formData);
            }
            onAdd(response.data); // Asegúrate de pasar los datos al callback
            onClose(); // Cierra el formulario
            window.location.reload();
        } catch (error) {
            console.error('Error al guardar la novedad:', error);
        }
    };
    

    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = { titulo, subtitulo, cuerpo };
    
        try {
            if (data.id) {
                // Editar novedad
                await axios.put(`http://localhost:5000/api/novedades/${data.id}`, payload, {
                    headers: { 'Content-Type': 'application/json' },
                });
            } else {
                // Crear nueva novedad
                await axios.post('http://localhost:5000/api/novedades', payload, {
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            onAdd();
            onClose();
        } catch (error) {
            console.error("Error al guardar la novedad:", error);
        }
    };
    */
    return (
        <div className="form-container">
            <h2>{data.id ? 'Editar Novedad' : 'Agregar Nueva Novedad'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Subtítulo:</label>
                    <input
                        type="text"
                        value={subtitulo}
                        onChange={(e) => setSubtitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Cuerpo:</label>
                    <textarea
                        value={cuerpo}
                        onChange={(e) => setCuerpo(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default FormNovedad;
