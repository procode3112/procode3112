import React from "react";
import Sign from "./sign";
import Login from "./Login";
// import{ BrowserRouter,Routes,} from "react-router-dom";
import { Routes, Route } from "react-router-dom"



function App() {
  return (

    <>
    <Routes>
    <Route exact path="/" element={ <Sign/> } />
    <Route exact path="/Login" element={ <Login/> } />





    </Routes>
    
    </>
  )

  
}

export default App;
