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
      margin: theme.spacing(4),
      width: '25ch',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    marginTop: '200px',
    marginLeft: '35px'
  },
  btn_back: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },

  text_one: {
    marginLeft: '45px'
  },
  text_two: {
    marginLeft: '45px'
  },
  button_create: {
    marginLeft: '45px',
    justifyContent: 'cener'
  },
  link: {
    textDecoration: 'none'
  }
}));

function Create() {
  const classes = useStyles();
  // Create chat room..
  // const themeId = useSelector(selectThemeId);
  // const userId = useSelector(selectUserId)
  var storage = window.localStorage;
  const userId = storage.userId;
  const themeId = storage.themeId
  
  console.log(userId);
  const createRoom = () => {
    const roomName = document.getElementById('standard-basicpOne').value;
    const roomScale = document.getElementById('standard-basicTwo').value;
    storage['roomName'] = roomName;
    createChatRoom(roomName, themeId, userId, roomScale, (result) => {
      console.log(roomName, themeId, userId, roomScale);
      if (result) {
        window.location.href = '/app/xianyun-chat/#/chat';
      } else {
        alert('创建失败');
      }
    });
    // db.collection('theme').doc(themeId).collection('rooms').add({
    //   roomName: roomName.value,
    //   roomScale: roomScale.value
    // })
  };
  return (
    <div>
      <Link to="/lobby">
        <Button variant="contained" color="default" className={classes.btn_back}>
          <ArrowBackIcon />
        </Button>
      </Link>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basicpOne" label="房名" className={classes.text_one} />
        <TextField id="standard-basicTwo" label="人数规模" className={classes.text_two} />
        <Button variant="text" color="default" className={classes.button_create} onClick={createRoom}>
          <p>创建</p>
        </Button>
      </form>
    </div>
  );
}

export default Create;
