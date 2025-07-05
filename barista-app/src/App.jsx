import { useState } from 'react'
import './App.css'
import DrinkFrom from './components/DrinkForm';

function App() {

  return (
    <div className='app'>
      <h1>On my Grind!</h1>
      <p>I'd like to order a ...</p>
      <DrinkFrom />
    </div>
  )
}

export default App
