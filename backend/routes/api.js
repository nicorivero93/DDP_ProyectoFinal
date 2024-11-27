import express from 'express';
import novedadesModel from '../models/novedadesModel.js';

const router = express.Router();

router.get('/novedades', async (req, res) => {
    try {
        const novedades = await novedadesModel.getNovedades();
        res.json(novedades);
    } catch (error) {
        res.status(500).send("Error al obtener novedades");
    }
});

router.post('/novedades', async (req, res) => {
    try {
        const { titulo, subtitulo, cuerpo } = req.body;

        if (!titulo || !subtitulo || !cuerpo) {
            return res.status(400).send("Todos los campos son obligatorios");
        }

        const nuevaNovedad = { titulo, subtitulo, cuerpo };
        await novedadesModel.insertNovedad(nuevaNovedad);
        res.status(201).send("Novedad agregada con éxito");
    } catch (error) {
        console.error("Error en la ruta POST /novedades:", error);
        res.status(500).send("Error al agregar la novedad");
    }
});


router.delete('/novedades/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await novedadesModel.deleteNovedadById(id);
        res.send("Novedad eliminada");
    } catch (error) {
        res.status(500).send("Error al eliminar novedad");
    }
});


router.put('/novedades/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, subtitulo, cuerpo } = req.body;

        const novedadActualizada = {
            titulo,
            subtitulo,
            cuerpo,
        };

        await novedadesModel.modificarNovedadById(novedadActualizada, id);

        // Devuelve la novedad actualizada al frontend
        res.json({ id, ...novedadActualizada });
    } catch (error) {
        console.error('Error al actualizar novedad:', error);
        res.status(500).send('Error al actualizar la novedad');
    }
});

export default router;