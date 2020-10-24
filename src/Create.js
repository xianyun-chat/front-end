import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom"
import db from "./firebase"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    marginTop:"200px",
    marginLeft: "35px",
  },
  button_create: {
    marginLeft: '45px',
  },
  btn_back: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}));



function Create() {
    const classes = useStyles();
      // Create chat room..
    const createRoom = () => {
        const roomName = document.getElementById("standard-basicpOne")
        const roomScale = document.getElementById("standard-basicTwo")
        
        db.collection('rooms').add ({
            roomName: roomName.value,
            roomScale: roomScale.value
        })
    
    }
    return (
        <div>
            <Link to="./option_room">
                <Button variant="contained" color="default" className={classes.btn_back} >
                  <ArrowBackIcon /> 
                </Button>
            </Link>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basicpOne" label="房名"/>
                <TextField id="standard-basicTwo" label="人数规模" />
                <Button variant="text" color="default" className={classes.button_create } onClick={createRoom}>创建</Button>
            </form>
        </div>
    )
}

export default Create
