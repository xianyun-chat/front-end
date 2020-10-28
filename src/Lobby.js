import React, {useState, useEffect} from 'react'
import {Grid, CardContent,Card,makeStyles, Paper} from "@material-ui/core"
import Room from './Room';
import Header from "./Header"
import Function from "./Function"
import db from "./firebase"
// import { selectThemeId } from './features/themeSlice';
import { useSelector } from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: "10px",
    marginLeft: "10px",
    marginRight:"10px",
    color: theme.palette.text.secondary,
  },
  p: {
    alignItems: "center",
    color: "pink",
    justifyContent: "center",
    position: "sticky",

  },
}));

function Lobby() {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    // const themeId = useSelector(selectThemeId)
    // console.log(selectThemeId)
    useEffect(() => {
        // if(themeId){
            db.collection('rooms').onSnapshot((snapshot) => 
                setRooms(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
        // }
    }, [])

    //get hours and minutes
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const mins = currentDate.getMinutes();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {rooms.map(({id, data: { roomName, roomScale} }) => (
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Room 
                            key={id} 
                            id={id}
                            name={roomName}
                            // image={item.image}
                            hours={hours}
                            mins={mins}
                            scale={roomScale}
                        />
                    </Paper>
                 </Grid>
                ))} 
            </Grid>
            <p className={classes.p}>{rooms.length}个聊天室</p>
      </div>
    )
}

export default Lobby
