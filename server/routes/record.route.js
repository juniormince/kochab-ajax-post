const express = require('express');
const router = express.Router();
const recordCollection = require('../modules/record-collection.js');

router.get('/', (req, res) => {
    res.send(recordCollection);
});

router.post('/', (req, res) => {
    console.log(req.body); //"WHATEVER IS DATA ON OUR CLIENT SIDE, IS REQ.BODY ON OUR SERVER SIDE" -Luke, 2018
    recordCollection.push(req.body);
    res.sendStatus(201);
});

module.exports = router;