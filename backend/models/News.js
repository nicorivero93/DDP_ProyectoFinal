const db = require('../db');

const News = {
    getAll: (callback) => {
        const query = 'SELECT * FROM news ORDER BY created_at DESC';
        db.query(query, callback);
    },
    create: (title, content, callback) => {
        const query = 'INSERT INTO news (title, content) VALUES (?, ?)';
        db.query(query, [title, content], callback);
    }
};

module.exports = News;
