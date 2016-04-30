var express = require('express');
var path = require('path');

var app = express();

// serve client folder as root server path
app.use('/', express.static(path.join(__dirname + '/../client')));

// handle route to serve main html file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

// start app
app.listen(3000, function () {
  console.log('Application is running on port 3000 !');
});
