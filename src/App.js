import React from 'react';
import './App.css';

function App() {
  const APP_ID = "ea5bfa4c";
  const APP_KEY = "171b1ec1c87cf3c7d6d5b177ec0c1c0b";
  
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className = "search-form">
        <input type = "text" classname = "search-bar"></input>
        <button type = "submit" classname = "search-button">Search</button>
      </form>
    </div>
  );
}

export default App;
