import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
