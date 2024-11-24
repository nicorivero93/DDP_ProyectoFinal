import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import characterRoutes from './routes/characterRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import authRoutes from './routes/authRoutes.js';

/*
const express = require('express');
const cors = require('cors');
const db = require('./db');
const authRoutes = require('./routes/authRoutes');
const characterRoutes = require(__dirname + '/routes/characterRoutes');
const newsRoutes = require('./routes/newsRoutes');
const contactRoutes = require('./routes/contactRoutes');
*/

config();

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitir solo frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Headers permitidos
    res.header('Access-Control-Allow-Credentials', 'true'); // Permitir credenciales
    next();
});


app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/characters', characterRoutes);
app.use('/news', newsRoutes);
app.use('/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
