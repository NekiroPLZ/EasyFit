import React from "react";

function CaloriesCalculator() {
  return (
    <div>
      <form>
        <div>
          <h2>Gender:</h2>
          <select>
            <option disabled>Select your gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label>Height</label>
          <input type="number" min="4" max="80"></input>
        </div>
      </form>
    </div>
  );
}

export default CaloriesCalculator;
