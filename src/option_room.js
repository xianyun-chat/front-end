import React from 'react'
import {Grid, CardContent,Card,makeStyles, Paper} from "@material-ui/core"
import Chat_room from './Chat_room';
import { useStateValue } from './StateProvider';

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

function Option_room() {
    const classes = useStyles();
    const [{ room }] = useStateValue();
    
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        {room.map((item) => (
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                  <Chat_room
                    id={item.id}
                    name={item.name}
                    image={item.id}
                    number={item.id}
                    hours={item.hours}
                    mins={item.mins}
                    scale={item.scale}
                    boom={item.id}
                  />
            </Paper>
          </Grid>
        ))}
        </Grid>
        <p className={classes.p}>{room.length}个聊天室</p>
      </div>
    )
}

export default Option_room
