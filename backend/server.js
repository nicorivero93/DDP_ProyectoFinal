const express = require('express');
const cors = require('cors');
const db = require('./db');
const authRoutes = require('./routes/authRoutes');
const characterRoutes = require('./routes/characterRoutes');
const newsRoutes = require('./routes/newsRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
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
