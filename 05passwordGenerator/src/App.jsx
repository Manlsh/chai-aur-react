import React from 'react'
import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'
import { paste } from '@testing-library/user-event/dist/paste';

function App() {

  const [length, setLength] = useState('8');

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setcharAllowed] = useState(false);

  const [password, setPassword] = useState('');

  const [copyText, setCopyText] = useState('Copy');

  //useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789'
    }

    if (charAllowed) {
      str += '!@#$%^&*()_+=[]{}~`'
    }


    
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

      console.log(pass);
    }

    setPassword(pass)
    
    
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
    setCopyText('Copied!');  
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='Container'>

      <div className='input-container'>
      <input 
      className='input-field' 
      type='text' 
      value={password} 
      placeholder='password'
      ref={passwordRef}
      />
      </div>

      <div className='button-container'>
      <button onClick={copyPasswordToClip} className='button'>{copyText}</button> 
      </div>

      <div className='slider-container'>
      <input 
      type='range' 
      minimum={8} 
      maximum={100} 
      value={length} 
      className='slider'
      onChange={(e) => {setLength(e.target.value)}}
      />
      <p className='length'>Length: ({length})</p>

      <div className='first-checkbox'>
      <input 
      type='checkbox' 
      className='checkbox-1'
      defaultChecked={numberAllowed}
      onChange={() => {
        setNumberAllowed((prev) => !prev);
      }}
      />
      <p className='number'>Numbers</p>
      </div>

      <div className='second-checkbox'>
        <input 
        type='checkbox' 
        className='checkbox-2'
        defaultChecked={charAllowed}
        onChange={() => {
          setcharAllowed((prev) => !prev)
        }}
        />
        <p className='characters'>Characters</p>
      </div>
      </div>
        
      </div>

      
    </>
  )
}

export default App
