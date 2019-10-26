const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();


app.use(morgan('dev'));

app.use((req, res, next) => {
    fs.appendFile('log.csv',
     `\n${req.headers['user-agent']},` +
     new Date() + ',' +
     req.method + ',' +
     req.path + ',' +
     req.protocol + ',' +
     res.statusCode + ',',
     (error) => {
        console.log(error)
    })
    next();
});


app.get('/', (req, res) => {
 res.status(200).send('ok')
});

app.get('/logs', (req, res) => {
});

module.exports = app;
