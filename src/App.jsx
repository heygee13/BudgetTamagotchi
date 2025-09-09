import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [happiness, setHappiness] = useState(100);

  return (
    <div className="app">
      <h1>💸 Budget Tamagotchi</h1>
      <p>Meet your gremlin friend 👾</p>

      <div className="pet">
        {happiness > 70 && <p>😎 Happy & thriving</p>}
        {happiness <= 70 && happiness > 30 && <p>😐 A lil worried...</p>}
        {happiness <= 30 && <p>😭 Send help (stop overspending)</p>}
      </div>

      <div className="buttons">
        <button onClick={() => setHappiness(happiness - 10)}>
          Overspend 💳
        </button>
        <button onClick={() => setHappiness(happiness + 10)}>
          Save 💎
        </button>
      </div>
    </div>
  );
}

export default App;
