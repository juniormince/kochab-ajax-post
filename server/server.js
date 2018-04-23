const express = require('express');
const bodyParser = require('body-parser');

const recordRouter = require('./routes/record.route');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//routes (get, post, put delete reqs)
app.use('/record', recordRouter);

app.listen(PORT, () => {
    console.log(`up and running on ${PORT}`);
});

