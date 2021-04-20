"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, password } = await UserStorage.getUserInfo(client.user_id);               

        if(id) {
            if(id === client.user_id && password === client.user_pw) {
                console.log("로그인 성공 ");
                return { success: true};                
            }
            return { success: false, msg : "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg : "존재하지 않는 아이디입니다."};    
        
        }

    async register() {
        const client = this.body;
        try{
            console.log("레지스터쪽 id은?",client.user_id);
            console.log("레지스터쪽 name은?",client.name);
            console.log("레지스터쪽 pw는?",client.user_pw);
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
           const a = { success: false, msg: err };
           return a;
        }
    }
}

module.exports = User;