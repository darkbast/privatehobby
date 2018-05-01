var mongoose = require('mongoose');

module.exports = function(){
  var db = mongoose.connect('mongodb://localhost/test');

  require('./model.menu');
  require('./model.user');
  require('./model.person');
  
  return db;
};