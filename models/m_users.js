var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_id:{type:String,required:true},
    user_pwd:{type:String,required:true},
    user_name:{type:String},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
});

module.exports = mongoose.model('users',UserSchema);
