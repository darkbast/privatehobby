var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MenuSchema = new Schema({
  menu_id : {type:Schema.Types.ObjectId, ref : 'SubMenu'},
  menu_name : {type:String}
});
  
var SubMenuSchema = new Schema({
//  sub_id : {type:Schema.Types.ObjectId, ref : 'MenuSchema'},
  sub_name : {type:String}
});

mongoose.model('SubMenu',SubMenuSchema);
mongoose.model('Menu',MenuSchema);