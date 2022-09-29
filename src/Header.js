import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const signOut = () =>{
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>

        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=1200:675" alt="" />
            
        </div>

        <div className="header__middle">
            <SearchIcon className='header__search' />
            <input type="text" 
                placeholder='Search mail' />
            <ArrowDropDownIcon className='header__inputCaret'/>
        </div>
          
        <div className="header__right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar onClick={signOut} />
        </div>
    </div>
  )
}

export default Header