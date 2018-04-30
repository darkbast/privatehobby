var users = require('../../controllers/admin/admin.users.ctrl');

// router -> controller
module.exports = function(app){
  app.route('/admin').get(users.index);
  app.route('/admin/users').post(users.index);
}
