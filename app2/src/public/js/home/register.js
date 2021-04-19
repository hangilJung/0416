"use strict"

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPassword = document.querySelector("#confirm-pw");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);


function register() {

    const req = {  // 변수명이 위에 const id = document.querySelector("#id"); 와 같아 오류로 id가 안나온듯함.
        user_id: id.value,
        name: name.value,
        user_pw: pw.value,
        confirmPassword: confirmPassword.value

    };


    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" //이러한 형태로 명시적으로 json이라고 알려주는거
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())  //json 호출해서 서버에 응답을 받는 순간 promise 객체를 반환하면 2번째 then으로 접근가능.
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
       console.error("회원가입 중 에러 발생"); 
    });
}