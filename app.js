require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');


const app = express();
const port = process.env.PORT || 8081;

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})
