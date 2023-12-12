import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setJoke(response.data.body);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dad Joke App</h1>
      <button onClick={fetchJoke}>Tell me a joke</button>
      {joke && (
        <div >
          <h2 className="p-1">{joke.setup}</h2>
          <p className="p-2">{joke.punchline}</p>
        </div>
      )}
    </div>
  );
}

export default App;
