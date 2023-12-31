var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello My Name is Surya and Bayu" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Kami membuat project sederhana implementasi cicd" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Berhasill!!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
