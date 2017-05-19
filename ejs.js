var express = require('express');
var routes = require('./routes');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/ejs views/');
app.locals.pageTitle = 'Awesome';;

app.get('/', routes.home);

var server = app.listen(3000, function () {
    console.log('Application is running on http://localhost:3000');
});