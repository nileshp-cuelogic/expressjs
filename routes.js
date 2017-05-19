exports.home = function (request, response) {
    response.render('home', {
        title: 'hello express',
        users : ['nilesh','gajanan']
    });
};