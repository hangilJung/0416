"use strict";

// 모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));  //js폴더 접근을 위해 설정을 해준다.

app.use('/', home);

module.exports = app; 