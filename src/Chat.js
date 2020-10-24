import { IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import "./Chat.css"
import MicNoneIcon from "@material-ui/icons/MicNone"
import Message from "./Message"
import { selectRoomName, selectRoomId } from './features/roomSlice';
import { useSelector } from "react-redux"
import db from "./firebase"
import firebase from "firebase"
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move"
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom"

function Chat() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const roomName = useSelector(selectRoomName);
    const roomId = useSelector(selectRoomId);
    const [messages, setMessages] = useState([]);
    
    //get messages
    useEffect(() => {
        if (roomId) {
           db.collection("rooms")
            .doc(roomId) 
            .collection("messages") 
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => 
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )     
            )
        }   
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        
        // Firebase
        db.collection("rooms").doc(roomId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo, 
            email: user.email,
            displayName: user.displayName,
        })
    
        setInput("") 
    }

    return (
        <div className="chat">
            {/* chat header */}
            <div className="chat_header">
                <Link to="./option_room">
                    <Button variant="contained" color="default" >
                        <ArrowBackIcon /> 
                    </Button>
                </Link>
                <h4><span className="chat_name">{roomName}</span></h4>
                
            </div>
            {/* chat messages */}

            <div className="chat_messages">
                <FlipMove>
                    {messages.map(({ id, data}) => (
                        <Message key={id}  contents={data} />
                    ))}
                </FlipMove>
            </div>
            {/* chat input */}
            <div className="chat_input">
                <form>
                    <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    placeholder="iMessage" 
                    type="text" />
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chat_mic" />
                </IconButton>
            </div>
        </div>
    )
}
export default Chat
