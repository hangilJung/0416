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
        console.log(userInfo);
        return userInfo;        
    }
    //static이 있어야 클래스 자체에서 변수에 접근 가능
    // #을 붙이면 외부에서 불러올 수 없다
    // static #users = {
    //     id: ["test1", "test2", "test3"],
    //     password: ["1234", "1234", "1234",],
    //     name: ["우리밋", "나개발", "김팀장"]
    // }

    

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers =  fields.reduce((newUsers, field) => {
           if(users.hasOwnProperty(field)) {
               newUsers[field] = users[field];
           }
           return newUsers;
        }, {})
        console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        }) //해당 로직이 성공시 실행
        .catch(console.error); // 해당 로직이 실패시 실행                   
    }

    

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.user_id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.user_pw);
        return { success: true };
    }
}

module.exports = UserStorage;