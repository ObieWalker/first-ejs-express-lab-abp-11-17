var express = require('express')
var app = express()
const path = require('path')

// Build Your Route Here
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, resp){
  resp.render('index')

})

module.exports = app
