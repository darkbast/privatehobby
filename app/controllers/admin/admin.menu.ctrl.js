var mongoose = require('mongoose');
var AdminMenuSchema = require('mongoose').model('AdminMenu');
var SubMenuSchema = require('mongoose').model('SubMenu');
var adminctrl = require('./admin.common.ctrl');

exports.admin_menu_index = function(req,res,next){
  console.log('controllers admin_menu_index');
  res.render('./admin/menu',{title:"test"});
};

exports.admin_menu_add = function(req,res,next){
  
  // 기존에 존재하는 AdminMenu취득
  AdminMenuSchema.find().distinct("menu_name",(err,result) => {
    if (result.length > 0){
      console.log("결과 존재 : " + result);
      res.render('./admin/menu_add',{
        title:"admin_menu_add_init",
        result:result
      });
    }else{
      res.render('./admin/menu_add',{
        title:"admin_menu_add_init"
      });      
    }
  });
};

exports.check = function(mode){
  console.log(mode);
}


exports.admin_menu_regist = function(req,res,next){
  // req취득(post)
  console.log(req.body);
  if (req.body.mode == 'M'){
    check(req.body.mode);
    // 메인메뉴의 
    if (!req.body.menu_name){
      console.log("C5");
      return;
    }
  
    AdminMenuSchema.find({menu_name:req.body.name},function(err,result){
      
      if (err){
        console.log("err");
        console.log(err);
        return;
      }
      
      if (result.length > 0){
        console.log("1");
        console.log(result);
        res.render('./admin/menu_add',{status:"메인메뉴는 이미 등록되어 있습니다.",title:"insert"});

        return;
      }else{
        var menu_id = new mongoose.Types.ObjectId;
        var mainmenu = new AdminMenuSchema({
          menu_name : req.body.menu_name,
          menu_dname : req.body.menu_dname,
          menu_auth : req.body.menu_auth,
          menu_url  : req.body.menu_url
        });
        console.log("2");
        mainmenu.save(function(err){
          if (err){
            console.log("Adminmenu insrt err");
            res.render('./admin/menu_add',{status:"메인메뉴 보존중 에러"});
            return;
          }else{
            console.log("Adminmenu insrt seccees");
          }
        });
      }
    });
  }else{
    // 어드민 메뉴가 존재하는지 확인
      console.log("!M : " + req.body);
      AdminMenuSchema.find({menu_name:req.body.name},function(err,result){
        if (result){
          SubMenuSchema.find({smenu_name:req.body.name},function(err,result){
            if (result){
              res.render('./admin/menu_add',{status:"서브메뉴는 이미 등록되어 있습니다."});
              return;
            }else{
              var submenu = new SubMenuSchema({
                menu_id : req.body.menu_id,
                smenu_id : req.body.submenus_id,
                smenu_name : req.body.submenus_name
              });

              mainmenu.save(function(err){
                if (err){
                  res.render('./admin/menu_add',{status:"서브메뉴 보존중 에러"});
                  return;
                }
              });
            }
          });
        }else{
          res.render('./admin/menu_add',{status:"메인메뉴는 등록되어 있지 않습니다.먼저 메인매뉴를 등록하세요."});
        }
    });
            console.log("4");
  }
  
  res.render('./admin/menu_add',{title:"admin_menu_add"});
};


exports.admin_menu_edit = function(req,res,next){
  console.log('controllers admin_menu_del');
  res.render('./admin/menu_edit',{title:"admin_menu_del"});
};

  
