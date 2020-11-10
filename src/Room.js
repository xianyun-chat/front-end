import React, { useState, Children } from 'react';
import { useDispatch } from 'react-redux';
import { setRoom } from './features/roomSlice';
import { getUserNumer } from './post/getUserNumer'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  link: {
    textDecoration: 'none'
  },
  boom: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '3px'
  },
  button: {
    marginBottom: '10px'
  },
  room_id: {
    marginTop: '10px',
    textAlign: 'left'
  },
  room_name: {
    marginTop: '5px',

  },
  room_info: {
    margin: '3px'
  },
  room_scale: {
    marginTop: '5px'
  }
}));

function Room({ id, name, image, scale, hours, mins, boom, noEntry, entry }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [numberInRoom, setNumberInRoom] = useState(1);

  const joinInRoom = () => {
    // setNumberInRoom(numberInRoom + 1);-----------------------------------------------------------------------------------------------------
    window.localStorage.setItem('roomId', id);
    getUserNumer(window.localStorage.roomId, (result) => {
      setNumberInRoom(result);
      console.log(result)
    })
    window.location.href = '/app/xianyun-chat/#/chat';

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
      <div className={classes.room_info}>
        <p className={classes.room_id}>{id}</p>
        <p className={classes.room_name}>房名：{name}</p>
        <p className={classes.room_scale}>
          在线人数： {numberInRoom}/{scale}
        </p>
        <div className={classes.boom}>{Array(boom).fill().map((_) => Children.toArray(<p>🔥</p>))}</div>
        <img className="" src={image} alt="" />
        <Button className={classes.button} variant="contained" color="primary" disableElevation onClick={joinInRoom} disabled={noEntry}>
          {entry}
        </Button>
      </div>
    </div>


  );
}

export default Room;
