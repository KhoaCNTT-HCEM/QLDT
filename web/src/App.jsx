import { useState } from 'react';
import AuthContainer from './components/authContainer/AuthAccount';
import './App.css'
import LogoHeader from './icon/LogoHeader/LogoHeader';

function App() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className='container'>
      <main>
        <AuthContainer />
      </main>
    </div>
  )
}

export default App
