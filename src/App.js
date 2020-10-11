import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {
  const APP_ID = "ea5bfa4c";
  const APP_KEY = "171b1ec1c87cf3c7d6d5b177ec0c1c0b";
  
  const [recipes, setRecipes] = useState([]);

  //Runs every time page is rendered
  useEffect(() => {
    ( async function getRecipes() {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
      })()
  }, []);
  //we pass a second param [] it runs only once.

// Fetch all the data
  // const getRecipes = async() => {
    
  // }


  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className = "search-form">
        <input type = "text" className = "search-bar"></input>
        <button type = "submit" className = "search-button">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title = {recipe.recipe.label} 
          img = {recipe.recipe.image} 
          calories = {recipe.recipe.calories}
        />
      ))}
    </div>
  ); 
}

export default App;
