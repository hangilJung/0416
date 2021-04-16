"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login
};

/// 키만 입력시 값은 키와 같음 

//module.exports = {
//   hello : hello
//    login : login
//};