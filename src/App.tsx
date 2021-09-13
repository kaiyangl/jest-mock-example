import { useEffect, useState } from 'react';
import './App.css';
import getRandomCatFact from './api';

function App() {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = () => {
    getRandomCatFact().then(data => setCatFact(data.text))
  }

  useEffect(() => {
    fetchCatFact()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {catFact}
        <button onClick={fetchCatFact}>Another!</button>
      </header>
    </div>
  );
}

export default App;
