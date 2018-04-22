var express = require('express');
var router = express.Router();
var path = require('path');
var UserModel = require('../models/m_users');

router.get('/',(req,res,next) => {
  console.log('/login get');
  res.render(
    path.join(__dirname,'/..','views','html','login','login')
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
  
  UserModel.find({user_id:req_user_id,user_pwd:req_user_pwd},function(err,result){
    if(err) throw err;
    console.log(result);
  });

  
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