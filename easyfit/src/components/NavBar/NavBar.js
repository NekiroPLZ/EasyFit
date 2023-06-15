import React from "react";
import "./NavBar.css";
import EasyFit from "../imagen/EasyFit.png";

import Sign_in from "../Login/Sign_in";
import Sign_up from "../Login/Sign_up";
function NavBar() {
  return (
    <div className="NavBar"> 
         <h1>Welcome to EasyFit</h1>
         <a href="/Sing_in">Sing_in</a>

         <img src={EasyFit} width={80} height={160}></img>  
    </div>
     
   
  );
}

export default NavBar;
