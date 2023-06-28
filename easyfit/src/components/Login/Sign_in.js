import React, { useState } from "react";
//Iconos/Imagen
<<<<<<< HEAD
// import EasyFit from "../imagen/EasyFit.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

import "./Sign.css";

import firstImage from "../Image/Jay-Cutler-quad-stomp-1.png";
import secondImage from "../Image/Ronnie.jpg";
import thirdImage from "../Image/Cbum.jpg";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Sign_in() {
  const navigate = useNavigate();
  const [adminCheck, setAdminCheck] = useState(true);
  const [adminPassword, setAdminPassword] = useState("admin");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const checkBoxHandler = () => {
    const adminCode = window.prompt("Enter admin code");
    if (adminCode === adminPassword) {
      setAdminCheck(!adminCheck);
    } else {
      alert("Incorrect Code");
    }
=======
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
>>>>>>> ab5b23cc4f8a7917a99dd5240c14ba08fa176e9f

    console.log(adminCheck);
  };

  const { login } = useAuth();

<<<<<<< HEAD
  const submitUserHandler = async (event) => {
    event.preventDefault();
    if (adminCheck) {
      try {
        await login(user.email, user.password);
        navigate("/UserInterface");
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        await login(user.email, user.password);
        navigate("/AdminInterface");
      } catch (error) {
        alert(error);
      }
    }
  };
  const goToRegisterHandler = (event) => {
    event.preventDefault();
    navigate("/register");
  };
=======
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
>>>>>>> ab5b23cc4f8a7917a99dd5240c14ba08fa176e9f

  const LogoutHandler = async()=>{
    const logout = await signOut(auth)
    Setuser(logout)
  }


  return (
<<<<<<< HEAD
    <div className="row container p-4">
      <div className="col-md-7">
        <div className="styles-border">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={firstImage} alt="" className="image" />
              </div>
              <div className="carousel-item">
                <img src={secondImage} alt="" className="image" />
              </div>

              <div className="carousel-item">
                <img src={thirdImage} alt="" className="image" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="mt-5 ms-5">
          <form onSubmit={submitUserHandler}>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={changeHandler}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={changeHandler}
              ></input>
            </div>
            <div>
              <input
                type="checkbox"
                id="adminCheck"
                name="adminCheck"
                value="check"
                onChange={checkBoxHandler}
              ></input>
              <p>Admin</p>
            </div>
            <button className="btn btn-primary">Sign In</button>
          </form>
          <div className="form-group">
            <button
              className="btn btn-secondary mt-4 form-control"
              onClick={goToRegisterHandler}
            >
              <h2>Register</h2>
            </button>
          </div>
        </div>
      </div>
=======
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
>>>>>>> ab5b23cc4f8a7917a99dd5240c14ba08fa176e9f
    </div>
  );
}

export default Sign_in;
