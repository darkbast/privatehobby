var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
  menu_id : {type:String},
  menu_name : {type:String}
});
  
var SubPersonSchema = new Schema({
  menu_id : {type:String},
  sub_id : {type:String},
  sub_name : {type:String}
});

mongoose.model('P2',SubPersonSchema);
mongoose.model('P1',PersonSchema);