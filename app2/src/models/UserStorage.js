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

}

module.exports = UserStorage;