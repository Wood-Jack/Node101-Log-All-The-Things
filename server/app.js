const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();


app.use(morgan('dev'));
// app.use((req, res, next) => {
// // write your logging code here

// });

app.get('/', (req, res) => {
res.status(200).send('ok')
});

app.get('/logs', (req, res) => {
// write your code to return a json object containing the log data here

});

module.exports = app;
