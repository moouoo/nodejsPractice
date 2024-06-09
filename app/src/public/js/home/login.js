"use strict";

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
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/";
            }
            else alert(res.msg);
        })
        .catch((err) => {
            console.error("로그인 중 에러발생");
        });

    // res.json()의 반환값은 Promise다.
    // 기본 res의 반환 값은 Responce스트림인데, .json()매서드를 통해 responce(응답)스트림을 읽을 수 있다.
    // responce는 데이터가 모두 받아진 상태가 아니다.
    // .json()으로 responce스트림을 가져와 완료될 때까지 읽는다. 다 읽은 body의 텍스트를 Promise 형태로 반환한다.

};
