import { useState } from 'react';
import AuthContainer from './page/authContainer/AuthAccount';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './page/profilePage/index.jsx';
import LessonPlan from './page/lessonPlan/index.jsx';
import PostingPlan from './page/lessonPlan/postingPlan/postingPlan.jsx';
import PostManage from './page/lessonPlan/planManagement/postManage';

function App() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className='main'>
      <main>
        <Routes>
          <Route path="/" element={<AuthContainer />} />
          <Route path="/lessonPlan" element={<LessonPlan />}>
            <Route path="postManage" element={<PostManage />}></Route>
            <Route
              path="postingPlan"
              element={<PostingPlan />}
            ></Route>
          </Route>
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
