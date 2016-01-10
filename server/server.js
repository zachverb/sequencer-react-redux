const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(require('morgan')('short'));

app.get('/', function(request, response) {
  response.sendFile(path.resolve('index.html'));
});

app.listen(port, function() {
  console.log('Express server listening on port', this.address().port);
});
