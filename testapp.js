var mongoose = require('./test/db.mongoose');

var db = mongoose();

// Model 불러오기
var P1 = require('mongoose').model('P1'); 
var P2 = require('mongoose').model('P2');

// P1의 등록정보
var menu_add = new P1({
  menu_id: "1",
  menu_name : "m1"
});

P1.find({menu_id:"1"},(err,result) => {
  if (result.length > 0){
      
    }
  }else{
    menu_add.save(err){
      if (err){
        console.log("err : " + err);
        return;
      }
      console.log("_id : " + menu_add._id);
      
      // 저장성공
      var submenu_add = new P2({
        menu_id : menu_add._id,
        sub_id : "1-1",
        sub_name : "s1"
      });
  
      // SUBMENU저장
      submenu_add.save(err){
        if (err){
          console.log("err : " + err);
        return;
        }

      }
  }
});



