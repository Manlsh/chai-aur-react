import { useState, useEffect } from 'react'


import './App.css'

function App() {


  const [backgroundColor, setBackgroundColor] = useState('white');

  

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  })
 


  return (
    <>
    <button className='red' onClick={() => setBackgroundColor('red')}>red</button>
    <button className='blue' onClick={() => setBackgroundColor('blue')}>blue</button>
    <button className='green' onClick={() => setBackgroundColor('green')}>green</button>
    <button className='yellow' onClick={() => setBackgroundColor('yellow')}>yellow</button>
    <button className='Olive' onClick={() => setBackgroundColor('olive')}>Olive</button>
    <button className='orange' onClick={() => setBackgroundColor('orange')}>Orange</button>
    </>
  )
}

export default App
