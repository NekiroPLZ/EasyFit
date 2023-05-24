import React, { useState } from "react";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);
  const inputSearchHandler = (event) => {
    setInputSearch(event.target.value);
  };
  //a9f856d3e5f24396aace208d8bb6548c
  //https://api.spoonacular.com/mealplanner/generate?apiKey=a9f856d3e5f24396aace208d8bb6548c&timeFrame=day
  const url =
    "https://api.spoonacular.com/food/menuItems/search?apiKey=a9f856d3e5f24396aace208d8bb6548c&query=" +
    inputSearch;
  const buttonHandler = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(data.menuItems));
  };
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
        <button type="button" onClick={buttonHandler}>
          TYOUCHASD
        </button>

        {result.map((e, i) => {
          return (
            <div key={i}>
              <h2>{e.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
