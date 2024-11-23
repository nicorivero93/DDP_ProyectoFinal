const News = require('../models/News');

const newsController = {
    getAll: (req, res) => {
        News.getAll((err, results) => {
            if (err) return res.status(500).send('Error al obtener las novedades');
            res.status(200).json(results);
        });
    },
    create: (req, res) => {
        const { title, content } = req.body;
        News.create(title, content, (err, result) => {
            if (err) return res.status(500).send('Error al crear la novedad');
            res.status(201).send('Novedad creada con éxito');
        });
    }
};

module.exports = newsController;
