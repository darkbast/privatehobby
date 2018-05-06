module.exports = function(app){
  var admin_menu = require('../../controllers/admin/admin.menu.ctrl');
  app.get('/admin',admin_menu.admin_menu_index);
  app.get('/admin/add',admin_menu.admin_menu_add);
  app.get('/admin/edit',admin_menu.admin_menu_edit);
//  app.route('/admin/add/input').get(function(req,res){
//    
//  }).post(function(req,res){
//    
//  });
  app.post('/admin/add/input',admin_menu.admin_menu_regist);
}