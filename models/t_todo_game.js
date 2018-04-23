var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoGame = new Schema({
    tg_id:{type:String,required:true},
    tg_name:{type:String},
    tg_genre:{type:Number,default:10},
    tg_platform:{type:Number,default:10},
    tg_currency:{type:String},
    tg_price:{type:Number},
    tg_content:{type:String},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
});

module.exports = mongoose.model('todo_game',MenuSchema);
