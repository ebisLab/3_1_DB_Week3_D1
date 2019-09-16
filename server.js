const express = require('express');

const RegisterRouter = require('./register/register-router.js');

const server = express();

server.use(express.json());
server.use('/api', RegisterRouter);

module.exports = server;