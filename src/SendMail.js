import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button, IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
function SendMail() {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => 
  {
    db.collection('emails').add({
        to: data.receiver,
        subject: data.subject,
        message: data.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <p>New Message</p>
            <CloseIcon onClick={ () => dispatch(closeSendMessage())} />
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder='To'   
            {...register("receiver",{ required: 'Please enter an email' })} 
            />  
            <p className='errorMessage'>{errors.receiver?.message}</p>
            <input  type="text" placeholder='Subject'   {...register("subject")} />
            <p className='errorMessage'>{ errors.message?.message }</p>
            <textarea  className="sendMail__text" type="text"   {...register("message", { required : "The message field is empty" })}></textarea>
            
            <Button type='submit' className="sendMail__button">Send</Button>
            
        </form>
            
    </div>
  )
}

export default SendMail