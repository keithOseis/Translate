const express = require('express');
const app = express();
const bodyParser = require("body-parser");

require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const http = require('http');
const apiRoutes  = require('./routes/routes');
const tokenRoutes = require('./routes/token');
app.use('/api' , apiRoutes);
app.use('/token' , tokenRoutes);



const port = process.env.PORT || 3000;
const server = http.createServer(app);


server.listen(port);
