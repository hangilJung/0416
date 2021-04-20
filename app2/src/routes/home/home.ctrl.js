"use strict";

const User = require('../../models/User');

const output ={
    home: (req, res) => {
        res.render("home/index");
    },    
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};


const process = {
    login: async (req, res) => {
        const user = new User(req.body); //유저라는 인스턴스를 만듬(user)
        const response = await user.login();
        console.log("response값" ,response);
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body); //유저라는 인스턴스를 만듬(user)
        const response = await user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process
};

/// 키만 입력시 값은 키와 같음 

//module.exports = {
//   hello : hello
//    login : login
//};