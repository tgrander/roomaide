var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/../client/index.html"));

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running');
});
