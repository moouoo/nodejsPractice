"use strict";

const { error } = require("console");

const fs = require("fs").promises;

class UserStorage{
    // class에 private는 맨 위로 올린다.. 문화같은것.
    static #getUserInfo(data, mid){
        const users = JSON.parse(data);
        const idx = users.mid.indexOf(mid);
        const usersKeys  = Object.keys(users); // => [id, pwd, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    };

    // class 자체에서 매소드를 접근을 할려면 똑같이 static을 사용해야한다.
    static getUsers(...fields){

        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUserInfo(mid){
        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, mid);
            }) // 성공시
            .catch(console.error); // 실패시
    };

    static save(userInfo){
        // const users = this.#users;
        users.mid.push(userInfo.mid);
        users.name.push(userInfo.name);
        users.pwd.push(userInfo.pwd);
        return { success : true };
    };
};

module.exports = UserStorage;