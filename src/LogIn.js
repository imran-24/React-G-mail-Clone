import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase'
import './LogIn.css'

function LogIn() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(user => {
        dispatch(login(
          {
            email: user.email,
            password: user.password,
            displayName: user.displayName,
            photoURL: user.photoURL
          }
        ))
      }).catch(error => alert(error))
  };
  return (
    <div className='logIn'>
        <div className="logIn__container">
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=1200:675" alt="" />
            <Button variant='contained' color='primary' onClick={signIn} type="submit">LOGIN</Button>
        </div>
    </div>
  )
}

export default LogIn