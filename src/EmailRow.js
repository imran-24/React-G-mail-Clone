import React from 'react'
import './EmailRow.css'
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';
function EmailRow({id, title, subject, description, time}) {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail(
        {
            id,
            title, 
        subject, 
        description, 
        time}
    ))
    navigate('/mail')
  }
  return (
    <div onClick={ openMail } className='emailRow'>
        <div className="emailRow__options">
            <Checkbox />
            <StarBorderIcon /> 
            <LabelImportantIcon />
        </div>
        <div className="emailRow__title">
            <h4>{title}</h4>
        </div>
        <div className="emailRow__message">

            <h4>
                {subject}  
                <span className="emailRow__description">
                    {''} - {description}
                </span>

            </h4>
        </div>
        <div className="emailRow__time">
            <h4>{time}</h4>
        </div>
    </div>
  )
}

export default EmailRow