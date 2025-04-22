import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <LoginPage/>
    </div>
  )
}

export default App
