import { IconButton } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import React from 'react'

import './EmailList.css'
import Section from './Section';
import EmailRow from './EmailRow';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from './firebase';

function EmailList() {

  const [emails, setEmails] = useState([]);
  
  useEffect( () => {
    db.collection('emails')
    .orderBy('timestamp', 'desc')
    .onSnapshot( snapshot => (
        setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        })))
    ))
  }, []);
  return (
    <div className='emailList'>
        <div className="emailList__settings">

            <div className="emailList_settingsLeft">
            <Checkbox
                // color='primary'
                // checked={checked}
                // onChange={handleChange}
                // inputProps={{ 'aria-label': 'primary checkbox' }}
            />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>

        <div className="emailList__sections">
            
            <Section Icon={InboxIcon} title="primary" color='red' selected={true} />
            <Section Icon={PeopleIcon} title="Social"  color='#1A73E8'/>
            <Section Icon={LocalOfferIcon} title="Promotional" color='green' />

        </div>

        <div className="emailList__list">
            {
                emails.map( ({ id, data: { to, subject, message, timestamp}}) => (
                    <EmailRow 
                        key={id}
                        title={to} 
                        subject={subject}
                        description={message}
                        time={ new Date(timestamp?.seconds * 1000).toUTCString()}
            />
                ))
            }
        

            
        </div>
    </div>
  )
}

export default EmailList