import React, {useState, Children, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {setRoom} from './features/roomSlice';
import {getUserNumer} from './post/getUserNumer';

const useStyles = makeStyles((theme) => ({
  room: {
    padding: '2%'
  },
  boom: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '3px'
  },
  button: {
    margin: '20px auto 10px',
    fontSize: '0.8em'
  },
  roomName: {
    fontSize: '1.2em',
    paddingLeft: '10px',
    paddingBottom: '5px',
    textAlign: 'left'
  },
  roomInfo: {
    fontSize: '0.8em',
    paddingLeft: '10px',
    textAlign: 'left'
  }
}));

function Room({id, name, image, scale, hours, mins, boom, noEntry, entry}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [numberInRoom, setNumberInRoom] = useState(1);

  const joinInRoom = () => {
    window.localStorage.setItem('roomId', id);
    window.localStorage.setItem('roomName', name);
    window.location.href = '/app/xianyun-chat/#/chat';
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

  useEffect(() => {
    getUserNumer(window.localStorage.roomId, (result) => {
      console.log(result);
      setNumberInRoom(result || Math.round(Math.random() * scale));
    });
  }, []);

  return (
    <div className={classes.room}>
      <div>
        <p className={classes.roomName}>
          {name}
          {Array(boom).fill().map((_) => Children.toArray(<span>🔥</span>))}
        </p>
        <p className={classes.roomInfo}>聊天室ID: {id}</p>
        <p className={classes.roomInfo}>
          在线人数: {numberInRoom}/{scale}
        </p>
        <div className={classes.boom} />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disableElevation
          onClick={joinInRoom}
          disabled={noEntry}
        >
          {entry}
        </Button>
      </div>
    </div>
  );
}

export default Room;
