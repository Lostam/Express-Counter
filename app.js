var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var counter = 0;
app.get('/', function (req, res) {
    counter++;
    res.send('Yo! ' + counter + ' Viewed this page');
});
app.get('/restart', function (req, res) {
    counter = 0;
    res.send('Restarted counter');
});
app.listen(port);
console.log('Listening...');
