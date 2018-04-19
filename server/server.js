const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

//this will live in the database shortly
const recordCollection = require('./modules/record-collection.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//routes (get, post, put delete reqs)
app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.post('/add-record', (req, res) => {
    console.log(req.body); //"WHATEVER IS DATA ON OUR CLIENT SIDE, IS REQ.BODY ON OUR SERVER SIDE" -Luke, 2018
    recordCollection.push(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`up and running on ${PORT}`);
});

