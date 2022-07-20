import React, { useState, useEffect } from "react";
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import Join from "./pages/join";
import Login from "./pages/login";
import Home from "./pages/home"

function App() {


    return (
    <div className="App">
        {/*<Login handleLogin={login} inputId={inputId} inputPw={inputPw}*/}
        {/*       handleChangeTextId={changeTextId} handleChangeTextPw={changeTextPw}*/}
        {/*/>*/}
        <Link to="/home" className="home">HOME</Link>
        <hr/>
        <Link to="/join" className="linkBtn"> 회원가입 </Link>
        <Link to="/login" className="linkBtn"> 로그인 </Link>
        <hr/>
        <Switch>
            <Route exact path="/join" component={Join}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    </div>
    )
}

export default App;
