"use strict";

class UserStorage{
    // static을 사용하여 정적으로 만들어야지 class에서 바로 가져와 사용가능하다.
    // #은 private를 의미하는 듯. 은닉화.
    static #users = {
        mid : ["admin", "신무우", "김팀장"],
        pwd : ["1234", "1234", "123456"],
        name : ["우리밋", "나개발", "김이름"]
    };

    // class 자체에서 매소드를 접근을 할려면 똑같이 static을 사용해야한다.
    static getUsers(...fields){

        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {});
        return newUsers;
    };
};

module.exports = UserStorage;