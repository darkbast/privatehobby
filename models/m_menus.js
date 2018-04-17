var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
    menu_id:{type:String,required:true},
    menu_name:{type:String},
    menu_auth:{type:Number,default:10},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
});

module.exports = mongoose.model('menus',MenuSchema);
