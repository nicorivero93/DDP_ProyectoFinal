import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.js';
import contactRoutes from './routes/contactRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar el archivo .env desde la raíz
config({ path: path.resolve(__dirname, '../.env') });


const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors({ 
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitir solo frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Headers permitidos
    res.header('Access-Control-Allow-Credentials', 'true'); // Permitir credenciales
    next();
});

app.use(cors(corsOptions));

app.use('/news', newsRoutes);
app.use('/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

// Configuración de middlewares para analizar JSON y datos codificados en URL
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
