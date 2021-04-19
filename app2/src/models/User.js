"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const {id, password } = UserStorage.getUserInfo(client.user_id);    
        console.log(id);
        console.log(password);    

        if(id) {
            if(id === client.user_id && password === client.user_pw) {
                console.log("로그인 성공 ");
                return { success: true};
                
            }
            return { success: false, msg : "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg : "존재하지 않는 아이디입니다."};    
        
     }

     register() {
        const client = this.body;
         const response = UserStorage.save(client);
         return response;
     }
}

module.exports = User;