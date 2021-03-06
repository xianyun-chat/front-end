import {Avatar} from '@material-ui/core';
import {database} from 'firebase';
import React, {forwardRef} from 'react';
import {selectUserId} from './features/userSlice';
import './Message.css';
import {useSelector} from 'react-redux';

const Message = forwardRef(({id, message}, ref) => {
  // const user = useSelector(selectUserId);
  const roomId = window.localStorage.getItem('roomId');
  const userId = window.localStorage.getItem('userId');
  var storage = window.localStorage;
  const userName = storage.userName;
  console.log(id, userId);
  return (
    <div ref={ref} className={`message ${userId === id && 'message_sender'}`}>
      <Avatar className="message_photo" src="" />
      <p className="chat_name">{userName}</p>
      <p className="chat_messages">{message}</p>
      <small>{new Date().toLocaleDateString()}</small>
    </div>
  );
});

export default Message;
