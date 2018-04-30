var User = require('mongoose').model('User');

exports.index = function(req,res,next){
  console.log('admin.users.ctrl.index');
  console.dir(__dirname);
  res.render('/admin/test',{title:"ADMIN USER"});
};