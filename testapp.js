var mongoose = require('./test/db.mongoose');

var db = mongoose();

// Populate 확인하기
var P1 = require('mongoose').model('P1'); 
var P2 = require('mongoose').model('P2');

var options = {
  path : "menu_id",
  model : P2,
  match : {menu_id:"1"}
};

P1.find().populate(options).exec(function(err,menu){
  console.log(menu);
});
/*
var submenu_add1 = new P2({
  menu_id : "1",
  sub_id : "1-1",
  sub_name : "s1"
});

var submenu_add2 = new P2({
  menu_id : "1",
  sub_id : "1-2",
  sub_name : "s2"
});

var menu_add = new P1({
  menu_id: "1",
  menu_name : "m1"
});

menu_add.save((err) => {
  console.log(err);
});

submenu_add1.save((err) => {
  console.log(err);
});

submenu_add2.save((err) => {
  console.log(err);
});
*/

/*
var submenu_add = new SubMenu({
//  sub_id : menu_add,
  sub_name : "submenu2"
});

var menu_add = new Menu({
  menu_id:submenu_add,
  menu_name : "menu2"
});


menu_add.save((err) => {
  console.log(err);
});

submenu_add.save((err) => {
  console.log(err);
});
*/
/*
var options = {
  path : "menu_id",
  model : SubMenu
};

Menu.find().populate(options).exec(function(err,menu){
  console.log(menu);
});
*/


/*
var options2 = {
  path : "sub_id",
  model : Menu
};

SubMenu.find().populate(options2).exec(function(err,menu){
  console.log(menu);
});
*/

//  menu_id : {type:Schema.Types.ObjectId, ref : 'SubMenu'},
//  menu_name : {type:String}

//  sub_id : {type:Schema.Types.ObjectId, ref : 'MenuSchema'},
//  sub_name : {type:String}





/*
// DB등록 확인
var User = require('mongoose').model('User'); // user_name

var user_add = new User({
  user_name : "Jang"
});

user_add.save((err) => {
  console.log(err);
});


// 등록 정보 확인
User.find((err,result) => {
  console.log(result);
});
*/