const newsController = {
    getAll: (req, res) => {
        NovedadesPage.getAll((err, results) => {
            if (err) return res.status(500).send('Error al obtener las novedades');
            res.status(200).json(results);
        });
    },
    create: (req, res) => {
        const { title, content } = req.body;
        NovedadesPage.create(title, content, (err, result) => {
            if (err) return res.status(500).send('Error al crear la novedad');
            res.status(201).send('Novedad creada con éxito');
        });
    },
};

export default newsController; // Exportar como predeterminado