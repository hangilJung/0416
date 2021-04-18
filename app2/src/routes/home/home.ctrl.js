"use strict";

const output ={
    home: (req, res) => {
        res.render("home/index");
    },    
    login: (req, res) => {
        res.render("home/login");
    }
};

const users = {
    id: ["test1", "test2", "test3"],
    password: ["1234", "1234", "1234",]
}

const process = {
    login: (req, res) => {
        const id = req.body.user_id;
        const password = req.body.user_pw;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        });

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