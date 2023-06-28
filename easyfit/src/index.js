<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Ruteo

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Sign_in from './components/Login/Sign_in';
import Sign_up from './components/Login/Sign_up';

import { FirebaseAppProvider } from 'reactfire'
import fireBaseConfig from './firebase-config';

//Ruteo

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <> <App /></>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/Sing_in",
    element: <div><Sign_in /> </div>
  },
  {
    path: "/Sing_up",
    element: <div><Sign_up /> </div>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>

>>>>>>> ab5b23cc4f8a7917a99dd5240c14ba08fa176e9f
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
