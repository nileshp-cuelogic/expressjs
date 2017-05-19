var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.end("<b>Hello</b> World");
});

var server = app.listen(3000, function () {
    console.log('app is running on http://localhost:3000');
});