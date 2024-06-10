"use strict";

const User = require("../../model/User");

const output = {
    home : (req, res) => {
        res.render("home/index");
    },

    login : (req, res) => {
        res.render("home/login");
    },

    register : (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login : (req ,res) => {
        const user = new User(req.body);
        const response = user.login();
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