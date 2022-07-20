import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {

    const baseUrl = "http://localhost:8080"

    const[inputId, setInputId] = useState("");
    const[inputPw, setInputPw] = useState("");

    async function login(e) {
        await axios
            .post(baseUrl + "/members/login",{id: inputId, pw: inputPw})
            .then((response) => {
                alert("then")
                alert(msg)
                document.location.href = "/home"
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function changeTextId(e) {
        e.preventDefault();
        setInputId(e.target.value);
    }

    function changeTextPw(e) {
        e.preventDefault();
        setInputPw(e.target.value);
    }

    return (
        <div className="content">
        <h1>LOGIN</h1>
        <form onSubmit={login}>
            <h4>I D</h4>
            <input type="text" required={true} value={inputId} placeholder="아이디" onChange={changeTextId}/>
            <h4>P W</h4>
            <input type="password" placeholder="비밀번호" required={true} value={inputPw} onChange={changeTextPw}/><br/><br/>
            <input className="loginBtn" type="submit" value="로그인"/>
        </form>
        </div>
    )
}

export default Login;