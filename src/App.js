

import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import EmailList from './EmailList';
import Mail from './Mail'
import Header from './Header';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import LogIn from './LogIn';
import { auth } from './firebase';


function App() {

  const sendMesssageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
          dispatch(
            login({
              email: user.email,
              displayName: user.displayName,
              photoUrl: user.photoURL
          }));
      }else{
        dispatch(logout());
      }
    })
  },[])

  return (
    <Router>

    {
      !user? <LogIn />
      :
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
          </Routes>

        </div>

        { sendMesssageIsOpen && <SendMail />}

      </div>

    }
      
      
    </Router>
      
    
    
  );
}

export default App;
