"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    };

    login(){
        const client = this.body;
        const {mid, pwd} = UserStorage.getUserInfo(client.mid);
        // const a = UserStorage.getUserInfo("admin");
        // console.log(a);

        if(mid){
            if(mid === client.mid && pwd === client.pwd){
                return {success : true};
            }
            return {success : false, msg : "비밀번호오류"};
        }
        return {success : false, msg : "존재하지 않은 아이디"};
    };

    register(){
        const client = this.body;
        const response =  UserStorage.save(client);
        return response;
    };
};

module.exports = User;