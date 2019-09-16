const express = require('express');

const RegisterRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/register', RegisterRouter);

module.exports = server;