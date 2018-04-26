var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_id:{type:String,required:true,unique:true,trim:true},
    user_pwd:{
      type:String,
      required:true,
      trim:true,
      validate:[
        function(user_pwd){
          return user_pwd.length >=2
        },
        'Password should be longer'
      ]},
    user_name:{type:String,required:true,unique:true,trie:true},
    user_email:{type:String},
    user_auth:{type:Number,default:10},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
});

module.exports = mongoose.model('users',UserSchema);
