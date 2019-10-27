const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const csv = require('csvtojson');

const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    fs.appendFile('log.csv',
     `\n${req.headers['user-agent'].replace(',','')},` +
     new Date().toISOString() + ',' +
     req.method + ',' +
     req.path + ',' +
     "HTTP/" + req.httpVersion + ',' +
     res.statusCode,
     (error) => {
        console.log('error:', error)
    })
    next();
});

app.get('/', (req, res) => {
 res.status(200).send('ok')
});

app.get('/logs', (req, res) => {
    csv().fromFile('log.csv').then(json => res.status(200).send(json))
});

module.exports = app;