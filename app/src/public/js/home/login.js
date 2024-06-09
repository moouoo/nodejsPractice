"use strict";

const { post } = require("../../../routes/home");



// #은 태그의 id에 부여되어있는 것을 가져오는 것 -> <input id="이부분" />
const mid = document.querySelector("#mid"),
    pwd = document.querySelector("#pwd"),
    loginBtn = document.querySelector("button");

// console.log(mid);
// console.log(pwd);

loginBtn.addEventListener("click", login);

function login(){
    // console.log("로그인함수작동");
    // console.log(mid.value);

    const req = {
        mid: mid.value,
        pwd: pwd.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    });
}
