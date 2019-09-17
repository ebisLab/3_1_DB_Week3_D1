const express = require('express');
// const helmet = require('helmet')
const session = require('express-session')
const RegisterRouter = require('./register/register-router.js');

const server = express();

const sessionConfig = {

    name: 'chocolatechip',
    secret: 'keep it secrt, keep it safe',
    cookie: {
        maxAge: 1000 * 60,
        secure: false, //true in production, false in development
        httpOnly: true,
    },
    resave: false, //recreate session even if it hasnt changed
    saveUninitialized: false, //we need to dynamically changed. //GDPR compliant

}

server.use(session(sessionConfig))

server.use(express.json());
server.use('/api', RegisterRouter);

module.exports = server;