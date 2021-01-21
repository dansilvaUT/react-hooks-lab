import { useState, useEffect } from 'react';
import axios from 'axios';
import Facts from './Components/Facts';
import './App.css';

const App = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => setFacts(res.data.results))
      .catch(err => console.log(`Error: ${err.message}`));
  }, []);

  return (
    <div className="App">
      {facts.map((element, index) => {
        return (
          <Facts name={element.name} key={index} />
        )
      })}

    </div>
  );
}

export default App;
