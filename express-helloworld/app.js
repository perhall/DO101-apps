var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello our World 2.0!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Red Mars!\n');
});

app.get('/venus', function (req, res) {
  res.send('Hello sweet Venus!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

