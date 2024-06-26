import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components.jsx/card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <ProfileCard username={'Manish'}/>
      <ProfileCard username={'Saina'}/>

    </>
  )
}

export default App
