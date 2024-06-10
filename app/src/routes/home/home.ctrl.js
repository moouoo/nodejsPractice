"use strict";

const UserStorage = require("../../model/UserStorage");

const output = {
    home : (req, res) => {
        res.render("home/index");
    },

    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req ,res) => {
        // console.log(req.body);
        const mid = req.body.mid,
            pwd = req.body.pwd;
         
        const users =  UserStorage.getUsers("mid", "pwd");

        const response = {};

        if(users.mid.includes(mid)){
            const idx = users.mid.indexOf(mid);
            if(users.pwd[idx] === pwd){
                response.success = true;
                return res.json(response);
            };
        };

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";

        return res.json(response);
        
    },
};

// const home = (req, res) => {
//     res.render("home/index");
// };

// 위에 있는거랑 똑같은 거임
// function home(req, res) {
//     res.render("home/index");
// };

// const login = (req, res) => {
//     res.render("home/login");
// };

// 오브젝트로 빼준다
// module.exports = {
//     home,
//     login,
// };

module.exports = {
    output,
    process,
};
