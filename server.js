const express = require('express');
const http = require('http');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
require('dotenv');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4100;

app.use(express.json())
app.use(routes);

server.listen(port, () => {
    console.log("Servidor Iniciado");
});