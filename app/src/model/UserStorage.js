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

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {});
        return newUsers;
    };

    // class 자체에서 매소드를 접근을 할려면 똑같이 static을 사용해야한다.
    static getUsers(isAll, ...fields){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        }) // 성공시
        .catch(console.error); // 실패시
    };

    static getUserInfo(mid){
        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, mid);
            }) // 성공시
            .catch(console.error); // 실패시
    };

    static async save(userInfo){
        const users = await this.getUsers(true);

        console.log(users);

        if(users.mid.includes(userInfo.mid)){
           throw "이미 존재하는 아이디입니다.";
        }
        else{
            users.mid.push(userInfo.mid);
            users.pwd.push(userInfo.pwd);
            users.name.push(userInfo.name);
        }

        // 데이터추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success : true};
    };
};

module.exports = UserStorage;