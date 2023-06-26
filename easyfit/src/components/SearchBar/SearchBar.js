import React, { useEffect, useState } from "react";

import { getFirestore } from "firebase/firestore";

const SearchBar = () => {
  
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);
 
  
  const [showMessage, setShowMessage] = useState(false);
  const [Message, SetMessage] = useState();


  const inputSearchHandler = (event) => {
    setInputSearch(event.target.value);
  };
  
  const getFoodCalories = async () => {
    if(inputSearch !== ""){
    const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=${inputSearch}&nutrition-type=cooking`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "731bb71b23msh21c235d3c646963p131fa4jsn2a871c777f8a",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const results = await response.json();
        setShowMessage(true);
        SetMessage(inputSearch)
        setResult([Math.round([results.hints[0].food.nutrients.ENERC_KCAL])]);
    } catch (error) {
      console.error(error);
    }
  }else{
    setShowMessage();
  }

  };
  const   SumbitHandler = ()=>{
   console.log("#")
  } 
  console.log(result);
  return (
    <div>
      SearchBar
      <div>
        <h2>Search</h2>
        <input
          type="text"
          value={inputSearch}
          onChange={inputSearchHandler}
          placeholder="SEARCH FOOD..."
        ></input>
        <button onClick={getFoodCalories}>enviar</button>

        {showMessage &&<>
                <h2>{`${Message} has ${result} Calories.`} </h2>
                <button onClick={SumbitHandler}>+</button>
                </>
                
        }
      </div>
    </div>
  );
};

export default SearchBar;