"use strict";

// #은 태그의 id에 부여되어있는 것을 가져오는 것 -> <input id="이부분" />
const mid = document.querySelector("#mid"),
    name = document.querySelector("#name"),
    pwd = document.querySelector("#pwd"),
    confirmPwd = document.querySelector("#confirm-pwd"),
    registerBtn = document.querySelector("#button");

    registerBtn.addEventListener("click", register);

function register(){
    const req = {
        mid: mid.value,
        name : name.value,
        pwd: pwd.value,
        confirmPwd: confirmPwd.value,
    };

    fetch("/register", {
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/login";
            }
            else alert(res.msg);
        })
        .catch((err) => {
            console.error("회원가입 중 에러발생");
        });
};
