const { response } = require('express');
const express = require('express');

const app = express();

app.get('/health', function (req, res, next) {

    res.json({ status: 'UP' });
});