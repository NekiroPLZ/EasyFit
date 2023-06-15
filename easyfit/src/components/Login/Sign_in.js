import React from "react";
//Iconos/Imagen
import EasyFit from "../imagen/EasyFit.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"

import "./Sign.css"
import { useState } from "react";

function Sign_in() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState();
  const [TypeInput, SetTypeInput] = useState("Password");
  const [ShowMensage, setShowMessage] = useState()

  const [Style, SetStyle] = useState(faEyeSlash)


  const SingInHandler = () => {
    //validacion de email (A decidir las validaciones)
    if (Email.includes('@' && ".com")) {
      //Guardar datos del mail
      console.log("Email Correcto")
      setShowMessage(false)
    } else {
      setShowMessage(true)
      console.log("Email Erroneo")
    }

    //Guardar contraseña (¿Validar?)
  }

  return (
    <div>
      <div className="Sign">
        <h1>Sign In</h1>
        <a href="/">Inicio</a>
        <img src={EasyFit} width={80} height={160}></img>
      </div>

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
      <button onClick={SingInHandler}>Enviar</button>
    </div>
  );
}

export default Sign_in;
