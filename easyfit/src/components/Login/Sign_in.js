import React from "react";
//Iconos/Imagen
import { useState } from "react";
import EasyFit from "../imagen/EasyFit.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"

import "./Sign.css"




import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,signOut } from 'firebase/auth';

function Sign_in() {


  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState();
  const [TypeInput, SetTypeInput] = useState("Password");
  const [ShowMensage, setShowMessage] = useState()

  const [Style, SetStyle] = useState(faEyeSlash)


  const [User, Setuser] = useState(null)
  const auth = getAuth();
  const SingInHandler = async() => {
    //validacion de email (A decidir las validaciones)
 /*    if (Email.includes('@' && ".com")) {
      //Guardar datos del mail
      console.log("Email Correcto")
      setShowMessage(false)
    } else {
      setShowMessage(true)
      console.log("Email Erroneo")
    } */

    const respuesta = await signInWithEmailAndPassword(auth, Email, Password)
   console.log(respuesta)

   Setuser([respuesta])
  



  }
  const googlehandler = async()=>{
    const respuestagoogle = new GoogleAuthProvider()
    const google = await signInWithPopup(auth,respuestagoogle)
    Setuser([google])

  }

  const LogoutHandler = async()=>{
    const logout = await signOut(auth)
    Setuser(logout)
  }


  return (
    <div>
      <div className="Sign">
        <h1>Sign In</h1>  
        <a href="/">Inicio</a>
        <img src={EasyFit} width={80} height={160}></img>
      </div>

      {User &&<h4>Usuario: {User[0].user.email}</h4>}
      <form>
        <label>Email:</label>
        <input type="email" onChange={(event) => (SetEmail(event.target.value))}></input>
        <br />
        {ShowMensage && <p>Invalid email must contain @ and .com</p>}
        <label>Password:</label>
        <input type={TypeInput} onChange={(event) => (SetPassword(event.target.value))}></input>

        {/* Visualicacion de contraseña + icono*/}
        <FontAwesomeIcon icon={Style}
          className="icon"
          onClick={() => (SetTypeInput(Style === faEyeSlash ? "Text" : "Password"), SetStyle(Style === faEyeSlash ? faEye : faEyeSlash))}
        />
        <br />
      </form>

      <button onClick={googlehandler}>google</button>
      <button onClick={SingInHandler}>Enviar</button>
      <button onClick={LogoutHandler}>Cerrar sesion</button>
    </div>
  );
}

export default Sign_in;
