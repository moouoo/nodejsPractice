"use strict";

const home = (req, res) => {
    res.render("home/index");
};

// 위에 있는거랑 똑같은 거임
// function hello(req, res) {
//     res.render("home/index");
// };

const login = (req, res) => {
    res.render("home/login");
};

// 오브젝트로 빼준다
module.exports = {
    home,
    login,
};

