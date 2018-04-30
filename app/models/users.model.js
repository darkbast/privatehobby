var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 999 : admin
// 0   : guest
// 10  : common
// 900 : sub admin
var UserSchema = new Schema({
  user_id    : {type:String, required:true, unique: true},
  user_name  : {type:String, required:true},
  user_pwd   : {type:String},
  user_auth  : {type:Number, default:10},
  updated_at : {type:Date, default:Date.now},
  created_at : {type:Date, default:Date.now}
});

mongoose.model('User',UserSchema);