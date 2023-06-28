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
<<<<<<< HEAD
  console.log(result);
  // useEffect(() => {
  //   getFoodCalories();
  // }, []);
=======
  const   SumbitHandler = ()=>{
   console.log("#")
  } 
>>>>>>> ab5b23cc4f8a7917a99dd5240c14ba08fa176e9f
  console.log(result);
  return (
    <div>
      <div>
        <h2>Search</h2>
        <input
          type="text"
          value={inputSearch}
          onChange={inputSearchHandler}
          placeholder="SEARCH FOOD..."
        ></input>
<<<<<<< HEAD
        <button type="button" onClick={getFoodCalories}>
          GET FOOD
        </button>
        {showMessage &&
          result.map((food, index) => {
            return (
              <div key={index}>
                <h2>{`${inputSearch} has ${food} Calories.`}</h2>
              </div>
            );
          })}
=======
        <button onClick={getFoodCalories}>enviar</button>

        {showMessage &&<>
                <h2>{`${Message} has ${result} Calories.`} </h2>
                <button onClick={SumbitHandler}>+</button>
                </>
                
        }
>>>>>>> ab5b23cc4f8a7917a99dd5240c14ba08fa176e9f
      </div>
    </div>
  );
};

export default SearchBar;