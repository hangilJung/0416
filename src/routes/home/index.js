"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");


router.get("/",  ctrl.home);//경로가 기본적으로 ./views이므로 생략가능

router.get("/login", ctrl.login);


module.exports = router;