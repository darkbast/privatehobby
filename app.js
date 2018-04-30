process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express_config'),
    mongoose = require('./config/mongoose');

var db = new mongoose();
var app = express();

//app.set({title:"First"});

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');