const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session'); // npm i express-session
const KnexStore = require('connect-session-knex')(session); // remember to curry and pass the session

const apiRouter = require('./api-router');
// const configureMiddleware = require('./configure-middleware');
const knex = require('../database/dbConfig');

const server = express();

const sessionConfig = {
    name: 'troll',
    secret: 'keep it secret, keep it safe!',
    resave: false,
    saveUninitialized: true, // related to GDPR compliance
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false, // should be true in production
        httpOnly: true // true means JS can't touch the cookie
    },
    store: new KnexStore({
        knex,
        tablename: 'sessions',
        createtable: true,
        sidfieldname: 'sid',
        clearInterval: 1000 * 60 * 15,
    })
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig)); // turn on the session middleware
// at this point there is a req.session object created by express-session

// configureMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;