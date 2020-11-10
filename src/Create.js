import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import {selectThemeId} from './features/themeSlice';
import {useSelector} from 'react-redux';
import {createChatRoom} from './post/createChatRoom';
import {selectUserId} from './features/userSlice';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_back: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  text: {
    width: '70vw'
  },
  button_create: {
    width: '70vw',
    textAlign: 'cener'
  }
}));

function Create() {
  const classes = useStyles();
  // Create chat room..
  // const themeId = useSelector(selectThemeId);
  // const userId = useSelector(selectUserId)
  const storage = window.localStorage;
  const userId = storage.userId;
  const themeId = storage.themeId;

  const goBack = () => (window.location.href = '/app/xianyun-chat/#/lobby');
  const createRoom = () => {
    const roomName = document.getElementById('standard-basicpOne').value;
    const roomScale = document.getElementById('standard-basicTwo').value;
    createChatRoom(roomName, themeId, userId, roomScale, (result) => {
      if (result) {
        storage['roomName'] = roomName;
        window.location.href = '/app/xianyun-chat/#/chat';
      } else {
        alert('创建失败');
      }
    });
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basicpOne" label="房名" className={classes.text} />
        <TextField id="standard-basicTwo" label="人数规模" className={classes.text} />
        <Button variant="text" color="default" className={classes.button_create} onClick={createRoom}>
          <p>创建房间</p>
        </Button>
        <Button variant="text" color="default" className={classes.button_create} onClick={goBack}>
          <p>返回大厅</p>
        </Button>
      </form>
    </div>
  );
}

export default Create;
