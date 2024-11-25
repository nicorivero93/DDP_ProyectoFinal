import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'k(4wIG2w.jPDqU1X',
    database: 'dnd_game',
});

export async function query(sql, params) {
    const [rows] = await db.execute(sql, params);
    return rows;
}

export default db;