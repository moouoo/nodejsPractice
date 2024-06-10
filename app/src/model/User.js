"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    };

    login(){
        const body = this.body;
        const {mid, pwd} = UserStorage.getUserInfo(body.mid);
        // const a = UserStorage.getUserInfo("admin");
        // console.log(a);

        if(mid){
            if(mid === body.mid && pwd === body.pwd){
                return {success : true};
            }
            return {success : false, msg : "비밀번호오류"};
        }
        return {success : false, msg : "존재하지 않은 아이디"};
    };
};

module.exports = User;