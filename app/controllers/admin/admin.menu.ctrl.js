//var AdminMenuSchema = require('mongoose').model('AdminMenu');

exports.admin_menu_index = function(req,res,next){
  console.log('controllers admin_menu_index');
  
  res.render('./admin/menu',{title:"test"});
};

exports.admin_menu_add = function(req,res,next){
  console.log('controllers admin_menu_add');
  res.render('./admin/menu_add',{title:"admin_menu_add"});
};

exports.admin_menu_edit = function(req,res,next){
  console.log('controllers admin_menu_del');
  res.render('./admin/menu_edit',{title:"admin_menu_del"});
};

  
