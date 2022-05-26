import React, { useState } from "react";
import logo from './logo-transparent.png';
// import React from "react";
import Login from './Login'
import './App.css';
import { Navigate } from "react-router";




export default function Sign(){

    function handleClick(){
        let m=document.getElementById("mobile").value;
          console.log(m.length);
          const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "token":"717dc2d82d86be210bef206cf512dba9",
              "mobile":m,
              "action": "Signin_or_Signup",
              "timestamp": 1652446231059
              })
        };
        fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', options)
            .then(response => console.log(response.json()))
            .then(data =>{ console.log(data)
            setClicked(true)});
        
            Navigate('/Login')
            setClicked(true)
          
    }

    const [isClicked,setClicked]=useState(false);
    if(isClicked
        ){
        return <Login />
    }else{

        return (
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           {!isClicked&&<React.Fragment>
            <div className='inputBox'>
            <span>+91</span>
              <input type="number" maxLength="10" id="mobile" placeholder="Enter Mobile Number"></input>
            </div>
            
            <button className="continueButton" onClick={()=>handleClick()}>Continue</button></React.Fragment>}
            <div class="footer">
        <p>By continuing you agree to our</p>
        <h2>Terms of Services & Policy</h2>
    </div>
                  
          </header>
        </div>
         
        )
    }
}
