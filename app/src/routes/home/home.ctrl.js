"use strict";

const users = {
    mid : ["admin", "신무우", "김팀장"],
    pwd : ["1234", "1234", "123456"],
};

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

        if(users.mid.includes(mid)){
            const idx = users.mid.indexOf(mid);
            if(users.pwd[idx] === pwd){
                return res.json({
                    success : true,
                });
            };
        };

        return res.json({
            success : false,
            msg : "로그인 실패",
        });
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
