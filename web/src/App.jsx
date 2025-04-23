import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import LogoHeader from './icon/LogoHeader/LogoHeader.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <header>
        <LogoHeader/>
      </header> */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path='/logoHeader' element={<LogoHeader />} /> */}
      </Routes>
    </div>
  )
}

export default App
