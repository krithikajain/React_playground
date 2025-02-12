import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0); // count is the state variable and setCount is the function to update the state variable
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => {
    setCount(count + multiplier);
  };

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10); //deduct the cost
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100); //deduct the cost
    }
  }

  return(
    <div className="header">
      <h1>Samosa Selector</h1>
      <h2>count: {count}</h2>
      <br />
      <img className="samosa"src="https://t4.ftcdn.net/jpg/05/61/78/65/360_F_561786558_x8thbi1Gr8UemPFNJzZugPwwkXEC68Bi.jpg" alt="samosa" 
      onClick={updateCount}/>
      <div className="container">
        <div className="upgrade">
          <h3>Double Samosa</h3>
          <p>Double the samosas per click!</p>
          <button onClick={buyDoubleStuffed}>Cost: 10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack</h3>
          <p>Five times the samosas per click!</p>
          <button onClick={buyPartyPack}>Cost: 100 samosas</button>
        </div>
      </div>
    </div>

  )
}

export default App
