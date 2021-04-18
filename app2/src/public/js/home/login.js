"use strict"

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);


function login() {

    const req = {  // 변수명이 위에 const id = document.querySelector("#id"); 와 같아 오류로 id가 안나온듯함.
        user_id: id.value,
        user_pw: pw.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" //이러한 형태로 명시적으로 json이라고 알려주는거
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
       console.error("로그인 중 에러 발생"); 
    });
}