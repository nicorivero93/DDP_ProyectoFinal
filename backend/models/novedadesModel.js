import { query as _query } from '../db.js'; // Asegúrate de que la ruta sea correcta

async function getNovedades() {
    const query = "SELECT * FROM novedades ORDER BY id DESC";
    const rows = await _query(query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        const query = "INSERT INTO novedades (titulo, subtitulo, cuerpo) VALUES (?, ?, ?)";
        const rows = await _query(query, [obj.titulo, obj.subtitulo, obj.cuerpo]);
        return rows;
    } catch (error) {
        console.error("Error al ejecutar la consulta SQL:", error);
        throw error;
    }
}



async function deleteNovedadById(id) {
    const query = "DELETE FROM novedades WHERE id = ?";
    const rows = await _query(query, [id]);
    return rows;    
}

async function getNovedadById(id) {
    const query = "SELECT * FROM novedades WHERE id = ?";
    const rows = await _query(query, [id]);
    return rows[0];   
}

async function modificarNovedadById(obj, id) {
    try {
        const query = `
            UPDATE novedades
            SET titulo = ?, subtitulo = ?, cuerpo = ?
            WHERE id = ?`;
        const rows = await _query(query, [obj.titulo, obj.subtitulo, obj.cuerpo, id]);
        return rows;
    } catch (error) {
        console.error("Error al actualizar novedad:", error);
        throw error;
    }
}



export default { 
    getNovedades, 
    deleteNovedadById, 
    insertNovedad, 
    getNovedadById, 
    modificarNovedadById 
};
