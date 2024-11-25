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
        const nuevaNovedad = req.body;
        await novedadesModel.insertNovedad(nuevaNovedad);
        res.status(201).send("Novedad agregada con éxito");
    } catch (error) {
        res.status(500).send("Error al agregar novedad");
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

export default router;
