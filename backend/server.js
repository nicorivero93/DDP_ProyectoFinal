import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import fileUpload from 'express-fileupload';
import apiRouter from './routes/api.js';
import contactRoutes from './routes/contactRoutes.js';
import newsRoutes from './routes/newsRoutes.js';

config();

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

app.use('/api', apiRouter);

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitir solo frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Headers permitidos
    res.header('Access-Control-Allow-Credentials', 'true'); // Permitir credenciales
    next();
});

app.use(cors(corsOptions));

app.use(express.json());

app.use('/news', newsRoutes);
app.use('/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
