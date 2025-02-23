import { useState } from 'react';
import './App.css';
import './index.css';
import BaristaForm from './components/BaristaForm';


function App() {

  return (
    <>
    <div className='title-container'>
      <div className="text-center p-4 bg-warning text-dark border-bottom border-dark">
      On my Grind!
      <h1 className="display-4"><p>
        So you think you can barista? Let's put that to the test...
      </p></h1>
    </div>
    </div>
    <BaristaForm />
    </>
  )
}

export default App
