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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use('/', home);

module.exports = app; 