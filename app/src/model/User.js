"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    };
    
    async login(){ // 비동기 함수로 바꿔주는 async, await를 사용할려면 필수이다.
        const client = this.body;
        const {mid,pwd} = await UserStorage.getUserInfo(client.mid);

        if(mid){
            if(mid === client.mid && pwd === client.pwd){
                return {success : true};
            }
            return {success : false, msg : "비밀번호오류"};
        }
        return {success : false, msg : "존재하지 않은 아이디"};
    };

    async register(){
        const client = this.body;
        try{
            const response =  await UserStorage.save(client);
            return response;
        }
        catch(err){
            return {success : false, msg : err};
        }
    };
};

module.exports = User;