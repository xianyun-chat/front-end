import { Avatar } from '@material-ui/core'
import { database } from 'firebase'
import React, { forwardRef } from 'react'
import { selectUser } from './features/userSlice'
import "./Message.css"
import { useSelector} from "react-redux"

const Message = forwardRef(({ id, contents: {
    timestamp,displayName,email,message,photo,uid }},
    ref
    ) => {
    const user = useSelector(selectUser);

    return (
        <div ref={ref} className={`message ${user.email === email && "message_sender"}`}>
          <Avatar className="message_photo" src={photo} />
          <p className="chat_name">{displayName}</p>
          <p className="chat_messages">{message}</p> 
          <small>{new Date(timestamp?.toDate()).toLocaleDateString()}</small>
        </div>
    )
})

export default Message
