import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>Chai aur React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
