const express = require('express');
const http = require('http');
const routes = require('./routes/index');
require('dotenv');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4100;

app.use(routes);

server.listen(port, () => {
    console.log("Servidor Iniciado");
});