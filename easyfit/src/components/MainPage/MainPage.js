import React from "react";
import "./MainPage.css";
import CaloriesCalculator from "../CaloriesCalculator/CaloriesCalculator";
function MainPage() {
  return (
    <div>
      <h1>Welcome to EasyFit</h1>
      <CaloriesCalculator />
    </div>
  );
}

export default MainPage;
