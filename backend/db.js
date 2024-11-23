const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'k(4wIG2w.jPDqU1X',
    database: process.env.DB_NAME || 'dnd_game',
    port: process.env.DB_PORT || 3306
});

module.exports = db;
