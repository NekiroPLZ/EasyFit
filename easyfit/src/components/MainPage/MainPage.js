import React from "react";
import "./MainPage.css";
import NavBar from "../NavBar/NavBar";
import CaloriesCalculator from "../CaloriesCalculator/CaloriesCalculator";

import SearchBar from "../SearchBar/SearchBar";
function MainPage() {
  return (
    <div>
   
      <div>
        <NavBar/>
        <CaloriesCalculator />
        <SearchBar />
      </div>
    </div>
  );
}

export default MainPage;
