import {Avatar} from '@material-ui/core';
import React, {forwardRef} from 'react';
import {selectUserId} from './features/userSlice';
import './Message.css';
import {useSelector} from 'react-redux';

const Message = forwardRef(({id, message, userName, date}, ref) => {
  // const user = useSelector(selectUserId);
  const roomId = window.localStorage.getItem('roomId');
  const userId = window.localStorage.getItem('userId');
  const storage = window.localStorage;
  return (
    <div ref={ref} className={`message ${userId === id && 'message_sender'}`}>
      <Avatar className="message_photo" src="" />
      <p className="chat_messages">
        <span>{message}</span>
      </p>
      <small>
        {userName + ' '}
        {date}
      </small>
    </div>
  );
});

export default Message;
