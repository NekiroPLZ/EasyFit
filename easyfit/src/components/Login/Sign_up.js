import React, { useState } from "react";
import EasyFit from "../imagen/EasyFit.png";

import { getAuth, createUserWithEmailAndPassword,signOut} from 'firebase/auth';


function Sign_up() {

  const auth = getAuth();
  const [User, Setuser] = useState(null)
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState();
 
  const Sing_up_Handler = async()=>{
    const Sing_up = await createUserWithEmailAndPassword(auth,Email,Password)
    Setuser([Sing_up])
  }
  const LogoutHandler = async()=>{
    const logout = await signOut(auth)
    Setuser(logout)
  }
  return <>
    <div className="Sign">
        <h1>Sign In</h1>  
        <a href="/">Inicio</a>
        <img src={EasyFit} width={80} height={160}></img>
    </div>
      <div>
      {User &&<h4>Usuario: {User[0].user.email}</h4>}
          <label>Email</label>
          <input type="email" onChange={(event) => (SetEmail(event.target.value))}></input>

          <label>Contraseña</label>
          <input type="password"onChange={(event) => (SetPassword(event.target.value))}></input>

          <button onClick={Sing_up_Handler}>Sing_up_</button>
          <button onClick={LogoutHandler}>Cerrar sesion</button>
      </div>
  </>;
}

export default Sign_up;
