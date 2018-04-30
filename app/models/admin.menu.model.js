var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 999 : admin
// 0   : guest
// 10  : common
// 900 : sub admin
var AdminMenuSchema = new Schema({
  menu_id    : {type:String, required:true},
  menu_name  : {type:String, required:true},
  menu_auth  : {type:Number, default:999},
  menu_url   : {type:String},
  submenus   : [{
      id   : {type:String, require:true},
      name : {type:String, require:true}
  }],
  updated_at : {type:Date,default:Date.now},
  created_at : {type:Date,default:Date.now}
});

mongoose.model('AdminMenu',AdminMenuSchema);