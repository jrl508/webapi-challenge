const express = require('express');

const server = express();
const apiRouter = require('./apiRouter')

server.use('/api', apiRouter)


module.exports = server;