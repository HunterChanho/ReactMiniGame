import React, { useState, useEffect } from "react";
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import axios from "axios";
import Join from './pages/join'

function App() {
    const baseUrl = "http://localhost:8080"

    const[inputId, setInputId] = useState("");
    const[inputPw, setInputPw] = useState("");

    async function login(e) {
          await axios
              .post(baseUrl + "/members/login",{id: inputId, pw: inputPw})
              .then((response) => {
                  console.log(response.data)
                  setInputId(response.data)
                  setInputPw(response.data)
              })
              .catch((error) => {
                  console.error(error)
              })
    }

    function changeTextId(e) {
      e.preventDefault();
      setInputId(e.target.value);
      console.log(inputId);
    }

    function changeTextPw(e) {
        e.preventDefault();
        setInputPw(e.target.value);
        console.log(inputPw);
    }

    return (
    <div className="App">
        <h1>LOGIN</h1>
          <form onSubmit={login}>
            <h4>I D</h4>
            <input type="text" required={true} value={inputId} placeholder="아이디" onChange={changeTextId}/>
            <h4>P W</h4>
            <input type="password" placeholder="비밀번호" required={true} value={inputPw} onChange={changeTextPw}/><br/><br/>
            <input className="loginBtn" type="submit" value="로그인"/>
          </form>
        <br/>
        <Link to="/join">회원가입 |</Link>
        <Switch>
            <Route exact path="/join" component={Join}  />
        </Switch>
        <a href=""> 아이디찾기 |</a>
        <a href=""> 비밀번호찾기</a>
    </div>
    );
}

export default App;
