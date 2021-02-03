const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const http = require('http');
const apiRoutes  = require('./routes/routes');
app.use('/api' , apiRoutes);

const port = process.env.PORT || 3000;
const server = http.createServer(app);


server.listen(port);
