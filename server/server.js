const express = require('express');
const path = require('path');

const app = express();

const logger = require('morgan');
const proxy = require('proxy-middleware');
const url = require('url');
const port = 8080;

// app.use(express.static('public'));
app.use(require('morgan')('short'));
app.use('/build/', proxy(url.parse('http://localhost:8081/build/')))

app.get('/', function(request, response) {
  response.sendFile(path.resolve('index.html'));
});

app.listen(port, function() {
  console.log('Express server listening on port', this.address().port);
});
