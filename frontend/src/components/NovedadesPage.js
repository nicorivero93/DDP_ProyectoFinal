import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NovedadItem from './novedades/NovedadItem';
import FormNovedad from './novedades/FormNovedad';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    const [novedadSeleccionada, setNovedadSeleccionada] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [showForm, setShowForm] = useState(false);

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

    const handleEdit = (novedad) => {
        setNovedadSeleccionada(novedad); // Configura la novedad seleccionada
        setMostrarFormulario(true); // Muestra el formulario de edición
    };

    const handleNovedadActualizada = (novedadActualizada) => {
        if (!novedadActualizada) {
            console.error('La novedad actualizada es indefinida');
            return;
        }
        setNovedades((prevNovedades) => {
            const existe = prevNovedades.some((novedad) => novedad.id === novedadActualizada.id);
            if (existe) {
                // Actualizar la novedad existente
                return prevNovedades.map((novedad) =>
                    novedad.id === novedadActualizada.id ? novedadActualizada : novedad
                );
            } else {
                // Agregar una nueva novedad
                return [...prevNovedades, novedadActualizada];
            }
        });
        setMostrarFormulario(false); // Cierra el formulario
        setNovedadSeleccionada(null); // Limpia la novedad seleccionada
    };
    

    /*
    const handleNovedadActualizada = (novedadActualizada) => {
        setNovedades((prevNovedades) =>
            prevNovedades.map((novedad) =>
                novedad.id === novedadActualizada.id ? novedadActualizada : novedad
            )
        );
        setMostrarFormulario(false); // Cierra el formulario
        setNovedadSeleccionada(null); // Limpia la novedad seleccionada
    };
    */

    const handleAdd = () => {
        setNovedadSeleccionada(null); // Asegúrate de que no haya datos seleccionados
        setMostrarFormulario(true); // Muestra el formulario
    };
    

    const handleCloseForm = () => {
        setShowForm(false);
        setNovedadSeleccionada(null);
    };

  
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/novedades/${id}`);
            setNovedades((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error eliminando la novedad:", error);
        }
    };

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    {novedades.map((item, index) => (
                        <div key={item.id} className="novedad">
                            <NovedadItem
                                title={item.titulo}
                                subtitle={item.subtitulo}
                                body={item.cuerpo}
                            />
                            <button onClick={() => { handleEdit(item); setShowForm(true); }}>Editar</button>
                            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <button onClick={() => setShowForm(true)}>Agregar Nueva Novedad</button>
                </>
            )}
            {showForm && (
                <FormNovedad
                onClose={handleCloseForm}
                onAdd={handleNovedadActualizada}
                data={novedadSeleccionada || {}} // Pasa un objeto vacío si no hay novedad seleccionada
            />
        )}
        </section>
    );
};

export default NovedadesPage;
