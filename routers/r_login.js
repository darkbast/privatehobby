var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',(req,res,next) => {
    console.log('/login get');
 res.sendFile(path.join(__dirname,'/..','views','html','login','login.html'));
});

router.post('/',(req,res,next) => {
    console.log('/login post');
    console.log(req.body);
    res.sendFile(path.join(__dirname,'/..','views','html','login'));
});

router.post('/check',(req,res,next) => {
    console.log("/login/check ");
    console.log(req.body);
    res.end("ok");
});


module.exports = router;