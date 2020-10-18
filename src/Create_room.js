import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';

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



function Create_room({ image,number,boom }) {
    const classes = useStyles();
    
    const [{ room },dispatch] = useStateValue();

    const createChatRoom = () => {
      // Create chat room..
      
      const name = document.getElementById("standard-basicpOne")
      const scale = document.getElementById("standard-basicTwo")
      //get hours and minutes
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const mins = currentDate.getMinutes();

      dispatch({
        type: "CREATE",
        item: {
            id: room.length,
            name: name.value,
            image: image,
            number: number,
            scale: scale.value,
            hours: hours,
            mins: mins,
            boom: boom,
        },
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
                <Button variant="text" color="default" className={classes.button_create} onClick={createChatRoom}>创建</Button>
            </form>
        </div>
    )
}

export default Create_room
