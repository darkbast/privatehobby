var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

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