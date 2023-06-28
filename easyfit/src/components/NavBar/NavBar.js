import React from "react";
import "./NavBar.css";
import EasyFit from "../imagen/EasyFit.png";

<<<<<<< HEAD
import Sign_in from "../Login/Sign_in";
function NavBar() {
  return (
    <div className="NavBar">
      <h1>Welcome to EasyFit</h1>
      <a href="/Login">Sing_in</a>
=======

function NavBar() {
  return (
    <div className="NavBar"> 
         <h1>Welcome to EasyFit</h1>
         <a href="/Sing_in">Sing_in</a>
         <a href="/Sing_up">Sing_up</a>
>>>>>>> ab5b23cc4f8a7917a99dd5240c14ba08fa176e9f

      <img src={EasyFit} width={80} height={160}></img>
    </div>
  );
}

export default NavBar;
