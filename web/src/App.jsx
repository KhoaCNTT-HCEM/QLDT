import { useState } from 'react';
// import AuthContainer from './page/authContainer/AuthAccount';
import './App.css'
import LogoHeader from './icon/LogoHeader/LogoHeader';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './page/profilePage';

function App() {
  // const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  // const handleSignUpClick = () => {
  //   setIsRightPanelActive(true);
  // };

  // const handleSignInClick = () => {
  //   setIsRightPanelActive(false);
  // };

  return (
    <div className='container'>
      <main>
        <Routes>
          {/* <Route path="/" element={<AuthContainer />}/> */}
          <Route
            path="/profile/:activepage"
            element={<ProfilePage />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
