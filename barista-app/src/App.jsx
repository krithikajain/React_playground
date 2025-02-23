import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm';

function App() {

  return (
    <><div className='title-container'>
      On my Grind!
      <h1><p>
        So you think you can barista? Let's put that to the test...
      </p></h1>
    </div>
    <BaristaForm /></>
  )
}

export default App
