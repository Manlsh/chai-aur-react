import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [length, setLength] = useState('8');

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setcharAllowed] = useState(false);

  const [password, setPassword] = useState('');

  const passwordGenerator = () => {
    
  }

  return (
    <>
      <div className='Container'>

      <div className='input-container'>
      <input className='input-field' type='text'/>
      </div>

      <div className='button-container'>
      <button className='button'>Copy</button> 
      </div>

      <div className='slider-container'>
      <input type='range' min='0' max='100' value='0' className='slider'/>
      <p className='length'>Length (16)</p>

      <div className='first-checkbox'>
      <input type='checkbox' className='checkbox-1'/>
      <p className='number'>Numbers</p>
      </div>

      <div className='second-checkbox'>
        <input type='checkbox' className='checkbox-2'/>
        <p className='characters'>Characters</p>
      </div>
      </div>
        
      </div>

      
    </>
  )
}

export default App
