//set up Development WebServer

var express = require('exress');
var path = require('path');

var port = 3000;
var app = express();
app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, '../src/indet.html'));
});
app.listen(port, function(err){
  if(err) {
    console.log(err);
  } else{
    open('http://localhost' + port);
  }
})
