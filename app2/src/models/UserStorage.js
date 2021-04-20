"use strict";

const fs = require("fs").promises;

class UserStorage {
    
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //=> [id, password, name] 배열이 만들어짐
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];                
            return newUser;
        }, {});
        return userInfo;        
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }


    //users.json에서 데이터를 가져오는거
    static getUsers(isAll,...fields) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        }) 
        .catch(console.error);  
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            }) 
            .catch(console.error);                 
    }    

    static async save(userInfo) {
        console.log("userInfo쪽",userInfo);
        const users = await this.getUsers(true);
        console.log("users쪽",users);
        if(users.id.includes(userInfo.id)) {
            throw ("이미 존재하는 아이디입니다.");
        }
        users.id.push(userInfo.user_id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.user_pw);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));    
        return { success: true };     
    }
}

module.exports = UserStorage;