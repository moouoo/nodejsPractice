"use strict";

// #은 태그의 id에 부여되어있는 것을 가져오는 것 -> <input id="이부분" />
const mid = document.querySelector("#mid"),
    name = document.querySelector("#name"),
    pwd = document.querySelector("#pwd"),
    confirmPwd = document.querySelector("#confirm-pwd"),
    registerBtn = document.querySelector("#button");

    registerBtn.addEventListener("click", register);

function register(){
    if(!mid.value) return alert("아이디를 입력해주세요");
    if(!pwd.value) return alert("비밀번호를 입력해주세요");
    if(pwd !== confirmPwd) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        mid: mid.value,
        name : name.value,
        pwd: pwd.value,
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
