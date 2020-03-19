import React, { useState , useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "ce9f6c88"
  const APP_KEY = "a12fadf3ac37e652207889c19825025b"


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Nachos');
;
  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
     <div className="App">
     <h1 className = "title"> <br></br>Recipe Book - Search Any Recipe</h1>
     <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
          <button type="submit" className="search-button">
          Search
         </button>
        </form>
        <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          source = {recipe.recipe.url}
        />
        
      ))}
      </div>
    </div>
  );
}

export default App;
