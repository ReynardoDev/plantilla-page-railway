const express = require('express');
const hbs = require('hbs');
const path = require('path');

console.log('🚀 Iniciando servidor...');
console.log(`📍 Directorio de trabajo: ${__dirname}`);
console.log(`🔧 Node version: ${process.version}`);

const app = express();
const port = process.env.PORT || 8080;

console.log(`🔌 Puerto configurado: ${port}`);

// Configurar motor de plantillas
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.set('views', path.join(__dirname, 'views'));

console.log('✅ Motor de plantillas HBS configurado');

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

console.log('✅ Archivos estáticos configurados');

// Middleware de logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Rutas
app.get('/', (req, res) => {
    try {
        res.render('home', {
            title: 'Road Trip by TEMPLATED',
            header: 'Road Trip'
        });
    } catch (error) {
        console.error('❌ Error rendering home:', error);
        res.status(500).send('Error rendering page');
    }
});

app.get('/generic', (req, res) => {
    try {
        res.render('generic');
    } catch (error) {
        console.error('❌ Error rendering generic:', error);
        res.status(500).send('Error rendering page');
    }
});

app.get('/elements', (req, res) => {
    try {
        res.render('elements');
    } catch (error) {
        console.error('❌ Error rendering elements:', error);
        res.status(500).send('Error rendering page');
    }
});

// Ruta de health check para Railway
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Error handler
app.use((err, req, res, next) => {
    console.error('❌ Error no manejado:', err);
    res.status(500).send('Internal Server Error');
});

// Escuchar en 0.0.0.0 para permitir conexiones externas (necesario para Railway)
const server = app.listen(port, '0.0.0.0', () => {
    console.log('═══════════════════════════════════════');
    console.log(`✅ Server running on port ${port}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Listening on: 0.0.0.0:${port}`);
    console.log('═══════════════════════════════════════');
});

// Manejo de errores del servidor
server.on('error', (error) => {
    console.error('❌ Error del servidor:', error);
    process.exit(1);
});

// Manejo de señales de terminación
process.on('SIGTERM', () => {
    console.log('⚠️  SIGTERM recibido, cerrando servidor...');
    server.close(() => {
        console.log('✅ Servidor cerrado correctamente');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('⚠️  SIGINT recibido, cerrando servidor...');
    server.close(() => {
        console.log('✅ Servidor cerrado correctamente');
        process.exit(0);
    });
});
