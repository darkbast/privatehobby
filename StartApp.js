var express = require('express');
var app = express();

app.use('/',function(res.req){
  res.send('Hello World');
});

app.listen(3000);
console.log('Server running at http://localhost:3000');