var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 999 : admin
// 0   : guest
// 10  : common
// 900 : sub admin
var AdminMenuSchema = new Schema({
  menu_name  : {type:String, required:true},
  menu_dname : {type:String, required:true},
  menu_auth  : {type:Number, default:999},
  menu_url   : {type:String},
  updated_at : {type:Date,default:Date.now},
  created_at : {type:Date,default:Date.now}
});

var SubMenuSchema = new Schema({
  menu_id    : {type:Schema.Types.ObjectId,ref:'AdminMenu'},
  smenu_name   : {type:String, required:true},
  smenu_dname : {type:String, required:true},
  smenu_auth  : {type:Number, default:999},
  smenu_url  : {type:String},
});

mongoose.model('SubMenu', SubMenuSchema);
mongoose.model('AdminMenu',AdminMenuSchema);