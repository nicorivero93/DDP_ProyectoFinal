import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NovedadItem from './novedades/NovedadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    // Cargar novedades al montar el componente
    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/api/novedades');
                setNovedades(response.data);
            } catch (error) {
                console.error("Error al cargar novedades:", error);
            }
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    // Función para manejar la edición
    const handleEdit = (id) => {
        console.log("Editar novedad con ID:", id);
        // Aquí puedes redirigir al usuario a una página de edición
        // Por ejemplo: navigate(`/editar-novedad/${id}`);
    };

    // Función para manejar la eliminación
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/novedades/${id}`);
            // Filtrar la novedad eliminada de la lista actual
            setNovedades(novedades.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error eliminando la novedad:", error);
        }
    };

    // Función para agregar una nueva novedad
    const handleAdd = () => {
        console.log("Agregar nueva novedad");
        // Aquí puedes redirigir al usuario a un formulario de agregar
        // Por ejemplo: navigate('/agregar-novedad');
    };

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map((item) => (
                    <div key={item.id} className="novedad">
                        <NovedadItem
                            title={item.titulo}
                            subtittle={item.subtitulo}
                            imagen={item.imagen}
                            body={item.cuerpo}
                        />
                        <button onClick={() => handleEdit(item.id)}>Editar</button>
                        <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                    </div>
                ))
            )}
            <button onClick={handleAdd}>Agregar Nueva Novedad</button>
        </section>
    );
};

export default NovedadesPage; 
