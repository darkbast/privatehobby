module.exports = function(app){
  var index = require('../controllers/index.ctrl');
  app.get('/',index.render);
}