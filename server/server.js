const express = require('express');
const app = express();
const PORT = 5000;

//this will live in the database shortly
const recordCollection = require('./modules/record-collection.js');

app.use(express.static('server/public'));

//routes (get, post, put delete reqs)

app.get('/records', (req, res) => {
    res.send(recordCollection);
});


app.listen(PORT, () =>{
    console.log(`up and running on ${PORT}`);
});

