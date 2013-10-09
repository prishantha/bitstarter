var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(fs.readFileSync("index.html"));

//buf = fs.readFileSync("index.html");

var output = buf.toString();

app.get('/', function(request, response) {
  response.send(output);
});

app.get('/about', function(req, res) {
    res.send(fs.readFileSync('about.html').toString());
});

app.get('/contact', function(req, res) {
    res.send(fs.readFileSync('contact.html').toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
