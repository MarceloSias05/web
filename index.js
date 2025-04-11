import express from 'express';

const app = express(); // se declara la constante app como express

app.use(express.static('public')); // se declara la carpeta public como carpeta estatica

const port = 3000; // se declara el puerto
app.listen(port, console.log('http://localhost:' + port)); // se inicia el servidor, donde esta escuchando todo el tiempo con el puerto declarado

// script.js