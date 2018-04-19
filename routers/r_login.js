var express = require('express');
var router = express.Router();
var path = require('path');
var UserModel = require('../model/m_user');

router.get('/',(req,res,next) => {
  console.log('/login get');
  res.sendFile(
    path.join(__dirname,'/..','views','html','login','login.html')
  );
});

router.post('/',(req,res,next) => {
    console.log('/login post');
    console.log(req.body);
    res.sendFile(path.join(__dirname,'/..','views','html','login'));
});

router.post('/check',(req,res,next) => {
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


module.exports = router;