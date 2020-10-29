import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux"
import { setRoom } from './features/roomSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        // background: URL()
    },
    link: {
        textDecoration: "none",
    },
    boom: {
        display: "flex",
    },
   
}))

function Room({ id,name,image,scale,hours,mins,boom,noEntry,entry }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const [numberInRoom, setNumberInRoom] = useState(1)
    
    const joinInRoom = () => {
        setNumberInRoom(numberInRoom + 1)
    }
    const shot = () => {
        dispatch(
            setRoom({
                roomId: id,
                roomName: name,
            })
        )
    } 
    
    if( numberInRoom / scale > 0.2) {
        boom = parseInt( 5 *  numberInRoom / scale)
    } else {
        boom = 1
    }

    if(numberInRoom < scale) {
        noEntry = false
        entry = "加入聊天室"
    } else {
        noEntry = true
        entry = "人数已满"
    }
    const ifJump = () => {
        return noEntry
    }

    return (
        <div className="room">
            <div className="room_info">
                <p>房间号：{ id }</p>
                <p>房名：{ name }</p>
                <p className="room_scale">
                    在线人数： {numberInRoom}/{scale}
                </p>
                <p className="create_time">
                    {hours} : {mins}
                </p>
                <div className={classes.boom}>
                    {
                        Array(boom).fill().map((_) => (
                            <p>🔥</p>
                        ))
                    }
                </div>
                <img className="" src={image} alt="" />
                <Link to="/chat" className={classes.link}  >
                <Button variant="contained" color="primary" disableElevation onClick={joinInRoom,shot} disabled={noEntry}>
                    {entry}
                </Button>
                </Link>
                
            </div>
        </div>
    )
}

export default Room 
