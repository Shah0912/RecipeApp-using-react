import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const APP_ID = "ea5bfa4c";
  const APP_KEY = "171b1ec1c87cf3c7d6d5b177ec0c1c0b";
  
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  
  //Runs every time page is rendered
  useEffect(() => {
    console.log('Effect has been run');
  });
  //we pass a second param [] it runs only once.



  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className = "search-form">
        <input type = "text" className = "search-bar"></input>
        <button type = "submit" className = "search-button">
          Search
        </button>
      </form>
      <h1 onClick={()=> setCounter(counter+1)}>{counter}</h1>
    </div>
  ); 
}

export default App;
