var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',(req,res,next) => {
  console.log('/main get');
  res.render(
    path.join(__dirname,'/..','views','html','main','main')
  );
}).post('/',(req,res,next) => {
  console.log('/main post');
  res.render(
    path.join(__dirname,'/..','views','html','main','main')
  );
});

router.post('/check',(req,res,next) => {
  console.log("check");
  var req_user_id = req.body.user_id;
  var req_user_pwd = req.body.user_pwd;
  
  UserModel.find({user_id:req_user_id,user_pwd:req_user_pwd},function(err,result){
    if(err) throw err;
    console.log(result);
  });
  
  console.log("/login/check ");
  console.log(req.body);
  res.end("ok");
});

router.get('/login_regist',(req,res,next) => {
  console.log('/login_regist disposal');
  
  res.render(
    path.join(__dirname,'/..','views','html','login','login_regist')
  );
});



router.post('/check_regist',(req,res,next) => {
  var req_user_id = req.body.user_id;
  var req_user_pwd = req.body.user_pwd;
  
  UserModel.find({user_id:req_user_id,user_pwd:req_user_pwd},function(err,result){
    if(err) throw err;
    console.log(result);
  });  
});

module.exports = router;