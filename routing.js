var express = require('express');

var app = express();

app.get('/me', function (request, response) {
    response.send('I am Nilesh');
});

app.get('/user/:name?/:city?', function (request, response) {

    var name = request.params.name;
    var city = request.params.city;
    response.send('hello ' + name + ', <br/> Address:<b>' + city + '</b>');
});

app.get('*', function (request, response) {
    response.send('<h1>404 Bad Request</h1>');
});

var server = app.listen(3000, function () {
    console.log('Application is running on http://localhost:3000');
});