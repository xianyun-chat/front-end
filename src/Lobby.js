import React, {useState, useEffect} from 'react'
import {Grid, CardContent,Card,makeStyles, Paper} from "@material-ui/core"
import Room from './Room';
import Header from "./Header"
import db from "./firebase"
import { selectThemeId } from './features/themeSlice';
import { useSelector } from "react-redux"
import { Toolbar, AppBar,TextField, FormHelperText} from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: "10px",
    marginLeft: "10px",
    marginRight:"10px",
    color: theme.palette.text.secondary,
  },

  footer: {
    
  },    
  num_rooms: {
    display: "flex",
    color: "pink",
    flex: 1,
    justifyContent: "center",


  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
  fabButton: {
      marginLeft: "15px",
  }
}));

function Lobby() {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const themeId = useSelector(selectThemeId)
    const [filter,setFilter] = useState("");

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        if(themeId){
            db.collection('theme').doc(themeId).collection('rooms').onSnapshot((snapshot) => 
                setRooms(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
        }
    }, [themeId])

    //get hours and minutes
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const mins = currentDate.getMinutes();

    return (
        <div className={classes.root}>
            <Header />
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.searchContainer}>
                        <SearchIcon className={classes.searchIcon} />
                        <TextField
                            onChange={handleSearchChange}
                            className={classes.searchInput}
                            label="id or name"
                            variant="standard"
                        />
                    </div>
                    <Link to="/create">
                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <AddIcon />
                        </Fab>
                    </Link>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3}>
                {rooms.map(({id, data: { roomName, roomScale} }) => (
                roomName.includes(filter) &&
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Room 
                            key={id} 
                            id={id}
                            name={roomName}
                            hours={hours}
                            mins={mins}
                            scale={roomScale}
                        />
                    </Paper>
                 </Grid>
                ))} 
            </Grid>
            <div className={classes.footer}>
                <p>
                    <span className={classes.num_rooms}>{rooms.length}个聊天室</span>
                </p>
            </div>
      </div>
    )
}

export default Lobby
