# 06-webserver

Servidor web con Express.js y Handlebars (HBS)

## 🚀 Características

- Express.js v5
- Motor de plantillas Handlebars (HBS)
- Archivos estáticos servidos desde `/public`
- Variables de entorno con dotenv
- Listo para desplegar en Railway

## 📋 Requisitos

- Node.js v14 o superior
- npm

## 🔧 Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` basado en `.env.example`:
```bash
cp .env.example .env
```

4. Configurar variables de entorno en `.env`:
```
PORT=8081
```

## 🏃 Ejecutar localmente

```bash
npm start
```

El servidor estará disponible en `http://localhost:8081` (o el puerto configurado en `.env`)

## 🌐 Despliegue en Railway

1. Conecta tu repositorio de GitHub con Railway
2. Railway detectará automáticamente el `package.json`
3. No necesitas configurar `PORT` en Railway - se asigna automáticamente
4. El comando de inicio es: `npm start`

### Variables de entorno en Railway

Railway asigna automáticamente la variable `PORT`. No necesitas configurarla manualmente.

## 📁 Estructura del proyecto

```
06-webserver/
├── public/          # Archivos estáticos (CSS, JS, imágenes)
├── views/           # Plantillas HBS
│   ├── partials/    # Componentes reutilizables
│   ├── home.hbs
│   ├── generic.hbs
│   └── elements.hbs
├── app.js           # Punto de entrada
├── package.json
└── .env.example     # Ejemplo de variables de entorno
```

## 🛠️ Tecnologías

- [Express.js](https://expressjs.com/) - Framework web
- [Handlebars](https://handlebarsjs.com/) - Motor de plantillas
- [dotenv](https://github.com/motdotla/dotenv) - Variables de entorno
