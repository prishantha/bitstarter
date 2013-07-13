var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(fs.readFileSync("index.html"));

//buf = fs.readFileSync("index.html");

var output = buf.toString();

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
