import React from "react";
import "./MainPage.css";
import CaloriesCalculator from "../CaloriesCalculator/CaloriesCalculator";
import EasyFit from "../imagen/EasyFit.png"
function MainPage() {
  return (
    <div>
      <div className="EasyFit">
        <h1>Welcome to EasyFit</h1>
        <img src={EasyFit} width={80} height={160}></img>
      </div>
      <div>
        <CaloriesCalculator />
      </div>
    </div>
  );
}

export default MainPage;
