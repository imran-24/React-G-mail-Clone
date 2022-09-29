import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import InputIcon from '@material-ui/icons/Input';
import { IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';


function Mail() {

  const selector = useSelector(selectOpenMail);

  return (
    <div className='mail'>
      <div className="mail__tools">

        <div className="mail__toolsLeft">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <InfoIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <DoubleArrowIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <InputIcon />
          </IconButton>
          
        </div>

      </div>
      <div className="mail__body">
        <div className="mail__bodyHeading">
          <div>
            <h2>{selector.subject}</h2>
            <DoubleArrowIcon className='mail__bodyHeadingIcon'/>
            <p>{selector?.title}</p>
          </div>
          <div className='mail__bodyHeadingTime'>
            <p>{selector?.timestamp}</p>
          </div>
        </div>

        <div className="mail__bodyText">
          <p>{selector?.description}</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Mail