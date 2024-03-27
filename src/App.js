import React from 'react';

import { useState } from "react";

import './App.css';

function App() {

const [counter, setCounter] = useState(5);
const [string, setString] = useState('');

const addValue = () => {
  if (counter < 20) {
   setCounter((add) => add + 1);
  } else {
    setString('Cant go above 20')
  }
}

const MinusValue = () => {
  if (counter > 0) {
  setCounter((minus) => minus - 1);
  } else {
    setString('Cant go below 0');
  }
}

  return (
    <>
    <h1>Hello, World</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={() => {addValue()}}>Add Value {counter}</button> 
    <button onClick={() => {MinusValue()}}>Remove Value {counter}</button>
    <p>Updated Value: {counter}</p>
    <p className='string'>{string}</p>
    </>
  );
}

export default App;
