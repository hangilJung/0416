"use strict"

const id = document.querySelector("#id"),
pw = document.querySelector("#pw"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value
    };
    
    console.log(req);
    console.log(JSON.stringify(req));


    fetch("/login", {
        method: "post",
        header: {
            "Content-Type": "application/json" //이러한 형태로 명시적으로 json이라고 알려주는거
        },
        body: JSON.stringify(req)
    })

}