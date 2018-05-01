var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  user_name : {type:String}
});
  
mongoose.model('User',UserSchema);