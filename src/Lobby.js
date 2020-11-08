import React, {useState, useEffect, Children} from 'react';
import {Grid, CardContent, Card, makeStyles, Paper} from '@material-ui/core';
import Room from './Room';
import Header from './Header';
import db from './firebase';
import {selectThemeId} from './features/themeSlice';
import {useSelector} from 'react-redux';
import {Toolbar, AppBar, TextField} from '@material-ui/core';
import {fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import {getRoomsByClass} from './post/getRoomsByClass';
// import TinderCard from "react-tinder-card"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100vh'
  },
  function: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  searchContainer: {
    display: 'flex',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px'
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px'
  },
  searchInput: {
    width: '200px',
    margin: '5px'
  },
  room: {
    //   margin: '0.5vh 0 4vh 0',
    //   width: "100vw",
    //   height: "90vh",
    //   display: 'flex',
    flex: 1,
    overflow: 'scroll'
    //   justifyContent: 'center',
    //   alignItems: 'center',
  },
  paper: {
    flex: 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px'
  },
  font: {
    display: 'flex',
    color: 'orange',
    fontWeight: '500',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    height: '3vh',
    bottom: 0
  }
}));

function Lobby() {
  const classes = useStyles();
  const [rooms, setRooms] = useState([]);
  const themeId = useSelector(selectThemeId);
  // const currentDate = new Date();
  // const [hours, setHours] = useState(currentDate.getHours())
  // const [mins, setMins] = useState(currentDate.getMinutes())
  const [roomNumber, setRoomNumber] = useState(rooms.length);
  // const hours = currentDate.getHours();
  // const mins = currentDate.getMinutes();
  const [filter, setFilter] = useState('');
  // const swiped = (direction,nameToDelete) => {
  //     console.log("remove" + nameToDelete)
  // }
  // const outOfFrame = (name) => {
  //     console.log(name + "left the screen!")
  // }
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
    setRoomNumber(
      rooms.filter(
        (room) => room.id.indexOf(e.target.value) !== -1 || room.data.roomName.indexOf(e.target.value) !== -1
      ).length
    );
    if (e.target.value === '') {
      setRoomNumber(rooms.length);
    }
  };

  useEffect(
    () => {
      if (themeId) {
        getRoomsByClass('美食', (result) => {
          console.log(result);
        });
        // db.collection('theme').doc(themeId).collection('rooms').onSnapshot((snapshot) => {
        //   setRoomNumber(snapshot.docs.length);
        //   setRooms(
        //     snapshot.docs.map((doc) => ({
        //       id: doc.id,
        //       data: doc.data()
        //     }))
        //   );
        // });
      }
    },
    [themeId]
  );

  return (
    <div className={classes.root}>
      <Header />
      <AppBar position="static">
        <Toolbar className={classes.function}>
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
      {/* room */}
      <div className={classes.room}>
        <Grid container>
          {rooms.map(({id, data: {roomName, roomScale}}) =>
            Children.toArray(
              (roomName.includes(filter) || id.includes(filter)) && (
                <Grid item xs={6}>
                  {/* <TinderCard
                            preventSwipe={["up","down"]}
                            onSwipe={(dir) => swiped(dir,roomName)}
                            onCardLeftScreen={() => outOfFrame(roomName)}> */}
                  <Paper className={classes.paper}>
                    <Room
                      key={id}
                      //Mark-----------------------------------------
                      id={id}
                      name={roomName}
                      // hours={hours}
                      // mins={mins}
                      scale={roomScale}
                    />
                  </Paper>
                  {/* </TinderCard> */}
                </Grid>
              )
            )
          )}
        </Grid>
      </div>
      <div className={classes.font}>
        <p>{roomNumber}个聊天室 </p>
      </div>
    </div>
  );
}

export default Lobby;
