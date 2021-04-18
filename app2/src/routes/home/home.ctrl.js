"use strict";

const User = require('../../models/User');
const UserStorage = require('../../models/UserStorage');

const output ={
    home: (req, res) => {
        res.render("home/index");
    },    
    login: (req, res) => {
        res.render("home/login");
    }
};


const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        // return res.json(response);
        // const id = req.body.user_id;
        // const password = req.body.user_pw;

        // const users = UserStorage.getUsers("id", "password");
        // const response = {};
        // if(users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if(users.password[idx] === password) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);

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