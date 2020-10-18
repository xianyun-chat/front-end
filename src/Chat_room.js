import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        // background: URL()
    },
    link: {
        textDecoration: "none",
    },
    boom: {
        display: "flex",
    }
}))

function Chat_room({ id,name,image,number,scale, boom,hours,mins }) {
    const classes = useStyles();

    return (
        <div className="room">
            <div className="room_info">
                <p>房间号：{ id }</p>
                <p>房名：{ name }</p>
                <p className="room_scale">
                    在线人数： {number}/{scale}
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
                    <img className="" src={image} alt="" />
                    <Link to="./Communication" className={classes.link} >
                    <Button variant="contained" color="primary" disableElevation>
                        加入聊天室
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Chat_room 
