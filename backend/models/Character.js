const db = require('../db');

const Character = {
    create: (userId, name, attributes, callback) => {
        const query = 'INSERT INTO characters (user_id, name, attributes) VALUES (?, ?, ?)';
        db.query(query, [userId, name, JSON.stringify(attributes)], callback);
    },
    findByUser: (userId, callback) => {
        const query = 'SELECT * FROM characters WHERE user_id = ?';
        db.query(query, [userId], callback);
    },
    update: (id, attributes, callback) => {
        const query = 'UPDATE characters SET attributes = ? WHERE id = ?';
        db.query(query, [JSON.stringify(attributes), id], callback);
    }
};

module.exports = Character;
