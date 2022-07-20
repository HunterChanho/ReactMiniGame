import React, { useState } from "react";
import axios from "axios";

function Join() {
    const baseUrl = "http://localhost:8080"

    function reducer(state, action) {
        switch (action.type) {
            case "Id":
        }
    }
    const[inputId, setInputId] = useState("");
    const[inputPw, setInputPw] = useState("");
    const[inputAddress, setInputAddress] = useState("");
    const[inputBrdt, setInputBrdt] = useState("");
    const[inputPhoneNum, setInputPhoneNum] = useState("");
    const[inputGendCd, setInputGendCd] = useState("");


    async function join() {
        await axios
            .post(baseUrl + "/members/join", {
                id: inputId,
                pw: inputPw,
                address: inputAddress,
                brdt: inputBrdt,
                phoneNum: inputPhoneNum,
                gendCd: inputGendCd
            })
            .then((response) => {
                alert("회원가입 완료.")
                document.location.href = "/login"
            })
            .catch((error) => {
                alert(error)
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
    function changeTextAddress(e) {
        e.preventDefault();
        setInputAddress(e.target.value);
    }
    function changeTextBrdt(e) {
        e.preventDefault();
        setInputBrdt(e.target.value);
    }
    function changeTextPhoneNum(e) {
        e.preventDefault();
        setInputPhoneNum(e.target.value);
    }
    function changeTextGendCd(e) {
        e.preventDefault();
        setInputGendCd(e.target.value);
    }

    return (
        <div className="content">
            <h1>Join</h1>
            <form onSubmit={join}>
                <label>아이디: </label>
                <input type="text" value={inputId} onChange={changeTextId}/><br/>
                <label>비밀번호: </label>
                <input type="password" value={inputPw} onChange={changeTextPw}/><br/>
                <label>주소: </label>
                <input type="text" value={inputAddress} onChange={changeTextAddress}/><br/>
                <label>생일: </label>
                <input type="text" value={inputBrdt} onChange={changeTextBrdt}/><br/>
                <label>핸드폰: </label>
                <input type="text" value={inputPhoneNum} onChange={changeTextPhoneNum}/><br/>
                <label>성별: </label>
                <input type="text" value={inputGendCd} onChange={changeTextGendCd}/><br/><br/>
                <input className="loginBtn" type="submit" value="가입하기"/>
            </form>
        </div>
    )
}

export default Join;