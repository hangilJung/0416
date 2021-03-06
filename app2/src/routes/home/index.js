"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");


router.get("/",  ctrl.output.home);//경로가 기본적으로 ./views이므로 생략가능
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login );
router.post("/register", ctrl.process.register);

module.exports = router;