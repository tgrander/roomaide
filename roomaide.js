var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/src/client"));
app.use(express.static(__dirname + "/node_modules"));


// app.get('/', function(req, res){
//   res.render('index')
// })

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is running');
});
