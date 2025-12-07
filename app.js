// Cargar variables de entorno solo si existe .env (desarrollo local)
require('dotenv').config({ path: '.env', optional: true });
const express = require('express');
const hbs = require('hbs');
const path = require('path');


const app = express();
const port = process.env.PORT || 65350;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', __dirname + '/views');


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Road Trip by TEMPLATED',
        header: 'Road Trip'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic');
});

app.get('/elements', (req, res) => {
    res.render('elements');
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Escuchar en 0.0.0.0 para permitir conexiones externas (necesario para Railway)
app.listen(port, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
