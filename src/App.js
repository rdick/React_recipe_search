import React, { useState, useEffect } from 'react';
import Recipe from './Recipe'
import logo from './logo.svg';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([])
  const [inputText, setInputText] = useState("")
  const [submitRecipe, setSubmitRecipe] = useState("chicken")


  const APP_ID = '6edf287b'
  const APP_KEY = '8efce34a2102a1fc761c23bfad8a4181'

  useEffect(() => {
    getRecipes()
  }, [submitRecipe])

  const getRecipes = async () => {
    console.log(inputText)
    const response = await fetch(`https://api.edamam.com/search?q=${submitRecipe}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const textHandler = (e) => {
    setInputText(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setSubmitRecipe(inputText)
    setInputText('')
  }


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" onChange={textHandler} value={inputText}></input>
        <button type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
