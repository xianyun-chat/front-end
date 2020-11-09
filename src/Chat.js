import {IconButton} from '@material-ui/core';
import React, {useState, useEffect, Children} from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import Message from './Message';
import {selectRoomName, selectRoomId} from './features/roomSlice';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import FlipMove from 'react-flip-move';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';

const io = require('socket.io-client');
const socket = io('http://49.235.190.178:10020', {
  reconnectionDelayMax: 100000
});
socket.connect();

function Chat() {
  const [input, setInput] = useState('');
  // const roomName = useSelector(selectRoomName);

  const roomName = window.localStorage.getItem('roomName')
  // const roomId = useSelector(selectRoomId);
  const [messages, setMessages] = useState([]);
  const roomId = window.localStorage.getItem('roomId');
  const userId = window.localStorage.getItem('userId');

  //get messages
  useEffect(() => {
    console.log(roomId, userId);
    // 接受消息，根据返回的消息决定展示与否，如何展示
    socket.on('serverToClient', (message) => {
      console.log('收到一条消息', message);
      const newMessages = messages;
      newMessages.push({
        id: message.userID,
        message: message.content
      });
      setMessages(newMessages);
      /**
         * 返回的 message 对象包括发送的所有内容
         * roomID：聊天室ID
         * userID：用户ID
         * content：聊天内容
         * ------------------------------------
         * 下面这两个字段只有用户消息发送失败才会有
         * code：状态码（失败3001）
         * message：提示信息
         */
    });
    // 订阅聊天室消息，这样就能接收到目标聊天室所有用户发送的消息
    socket.emit('subscribe', {roomID: roomId});
    return () => {
      // 退出前取消订阅
      socket.emit('unsubscribe', {roomID: 1});
      // 用户退出聊天室的时候应该断开连接
      socket.disconnect();
    };
  }, []);

  const handleClickSendMessage = (e) => {
    e.preventDefault();
    // 发送一条消息，用户输入发送消息时执行这段代码
    console.log(roomId, userId);
    socket.emit('clientToServer', {
      roomID: roomId,
      userID: userId,
      content: input
    });
    setInput('');
    setTimeout(() => console.log(messages), 0);
  };

  return (
    <div className="chat">
      {/* chat header */}
      <div className="chat_header">
        <Link to="./lobby">
          <Button variant="contained" color="default">
            <ArrowBackIcon />
          </Button>
        </Link>
        <h4>
          <span className="chat_name">{roomName}</span>
        </h4>
      </div>
      {/* chat messages */}

      <div className="chat_messages">
        {console.log(messages)}
        <FlipMove>{messages.map(({id, message}) => Children.toArray(<Message id={id} message={message} />))}</FlipMove>
      </div>
      {/* chat input */}
      <div className="chat_input">
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="iMessage" type="text" />
          <button onClick={handleClickSendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat_mic" />
        </IconButton>
      </div>
    </div>
  );
}
export default Chat;
