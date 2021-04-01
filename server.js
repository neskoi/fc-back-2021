const express = require('express');
const http = require('http');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
require('dotenv');
var cors = require('cors')
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4100;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())
app.use(express.json())
app.use(routes);

server.listen(port, () => {
    console.log("Servidor Iniciado");
});