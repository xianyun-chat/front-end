import React, {useState, Children} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {setRoom} from './features/roomSlice';
import { getUserNumer } from './post/getUserNumer'

const useStyles = makeStyles((theme) => ({
  root: {
    // background: URL()
  },
  link: {
    textDecoration: 'none'
  },
  boom: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center'
  }
}));

function Room({id, name, image, scale, hours, mins, boom, noEntry, entry}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [numberInRoom, setNumberInRoom] = useState(1);
  
  const joinInRoom = () => {
    // setNumberInRoom(numberInRoom + 1);-----------------------------------------------------------------------------------------------------
    window.localStorage.setItem('roomId', id);
    getUserNumer(window.localStorage.roomId,(result) => {
      setNumberInRoom(result);
      console.log(result)
    })
    window.location.href = '/chat';

  };
  const shot = () => {
    dispatch(
      setRoom({
        roomId: id,
        roomName: name
      })
    );
  };

  if (numberInRoom / scale > 0.2) {
    boom = parseInt(5 * numberInRoom / scale);
  } else {
    boom = 1;
  }

  if (numberInRoom < scale) {
    noEntry = false;
    entry = '加入聊天室';
  } else {
    noEntry = true;
    entry = '人数已满';
  }
  const ifJump = () => {
    return noEntry;
  };

  return (
    <div className="room">
      <div className="room_info">
        <p>房间号：{id}</p>
        <p>房名：{name}</p>
        <p className="room_scale">
          在线人数： {numberInRoom}/{scale}
        </p>
        {/* <p className="create_time">
                    {hours} : {mins}
                </p> */}
        <div className={classes.boom}>{Array(boom).fill().map((_) => Children.toArray(<p>🔥</p>))}</div>
        <img className="" src={image} alt="" />
        <Button variant="contained" color="primary" disableElevation onClick={joinInRoom} disabled={noEntry}>
          {entry}
        </Button>
      </div>
    </div>
  );
}

export default Room;
