var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./lib/db');
var app = express();
app.disable('view cache');

// EJS설정
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
//app.engine('html',require('ejs'));


// 세션 설정
app.use(session({
  secret:'!@#mysessionkey#@!',
  resave:false,
  saveUninitialized:true
}));

/*
req.session.destroy(function(err){
  // cannot access session here
});
*/

// DB접속

// 라우터 설정
var LoginRouter = require('./routers/r_login');

app.use(bodyParser.urlencoded({extended:true}));

// 정적 폴더정의
app.use('/disp',express.static(path.join(__dirname,'views')));

app.use('/login',LoginRouter);

app.listen(8080,() => {
     console.log('Start 8080');
});