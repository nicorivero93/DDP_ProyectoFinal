import { query as _query } from '../db.js'; // Asegúrate de que la ruta sea correcta

async function getNovedades() {
    const query = "SELECT * FROM novedades ORDER BY id DESC";
    const rows = await _query(query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        const query = "INSERT INTO novedades SET ?";
        const rows = await _query(query, [obj]);
        return rows;
    } catch (error) {
        console.error(error);
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
        const query = "UPDATE novedades SET ? WHERE id = ?";
        const rows = await _query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.error(error);
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
