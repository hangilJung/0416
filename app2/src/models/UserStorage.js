"use strict";

class UserStorage {
    
    //static이 있어야 클래스 자체에서 변수에 접근 가능
    // #을 붙이면 외부에서 불러올 수 없다
    static #users = {
        id: ["test1", "test2", "test3"],
        password: ["1234", "1234", "1234",],
        name: ["우리밋", "나개발", "김팀장"]
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers =  fields.reduce((newUsers, field) => {
           if(users.hasOwnProperty(field)) {
               newUsers[field] = users[field];
           }
           return newUsers;
        }, {})
        console.log(newUsers);
        return this.#users;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //=> [id, password, name] 배열이 만들어짐
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            
            return newUser;
        }, {});
        
        return userInfo;
    }
}

module.exports = UserStorage;