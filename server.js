const express = require('express');
// const helmet = require('helmet')
const cors = require('cors');
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const dbConfig = require('./data/dbConfig')

const RegisterRouter = require('./register/register-router.js');

const server = express();
server.use(cors());

const sessionConfig = {

    name: 'chocolatechip',
    // secret: 'keep it secrt, keep it safe',
    secret: process.env.SESSION_SECRET || 'keep it secrt, keep it safe',
    cookie: {
        maxAge: 1000 * 60 * 60, //milliseconds
        secure: false, //true in production, false in development
        httpOnly: true,
    },
    resave: false, //recreate session even if it hasnt changed
    saveUninitialized: false, //we need to dynamically changed. //GDPR compliant
    store: new KnexSessionStore({
        knex: dbConfig,//talk to DB
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 30, //every 30 minutes or so //clean out old session data

    })

}

server.use(session(sessionConfig))

server.use(express.json());
server.use('/api', RegisterRouter);

module.exports = server;