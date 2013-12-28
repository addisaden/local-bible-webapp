var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.get('/', function(req, res) {
  res.render('index');
});



app.listen(7779);
console.log("Listen on port 7779");
