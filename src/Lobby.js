import React, { useState, useEffect, Children } from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import Room from './Room';
import Header from './Header';
import { selectThemeId } from './features/themeSlice';
import { useSelector } from 'react-redux';
import { Toolbar, AppBar, TextField } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { getRoomsByClass } from './post/getRoomsByClass';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
// import TinderCard from "react-tinder-card"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // function: {
  //   display: 'flex',
  //   justifyContent: 'space-between'
  // },
  // searchContainer: {
  //   display: 'flex',
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   paddingLeft: '20px',
  //   paddingRight: '20px',
  //   marginTop: '5px',
  //   marginBottom: '5px'
  // },
  // searchIcon: {
  //   alignSelf: 'flex-end',
  //   marginBottom: '5px'
  // },
  // searchInput: {
  //   width: '200px',
  //   margin: '5px'
  // },
  room: {
    flex: 1,
    overflow: 'scroll'
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
  const [roomNumber, setRoomNumber] = useState(rooms.length);
  const [filter, setFilter] = useState('');
  var storage = window.localStorage;
  const logout = () => {
    window.location.href = '/';
  }
  const toPw = () => {
    window.location.href = '/changepw'
  }
  const toUN = () => {
    window.location.href = '/changeun'
  }
  const toCreate = () => {
    window.location.href = '/create'
  }
  const toHome = () => {
    window.location.href = '/home'
  }
  // const swiped = (direction,nameToDelete) => {
  //     console.log("remove" + nameToDelete)
  // }
  // const outOfFrame = (name) => {
  //     console.log(name + "left the screen!")
  // }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={toUN}>修改用户名</MenuItem>
      <MenuItem onClick={handleMenuClose, toPw}>修改密码</MenuItem>
      <MenuItem onClick={handleMenuClose, logout}>退出登陆</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={toCreate}>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
          <p>Add</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
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
      // if (themeId) {
      getRoomsByClass(storage.themeId, (result) => {
        console.log(result);
        setRoomNumber(result.length);
        setRooms(
          result.map((item) => ({
            id: item.CRID,
            data: {
              roomName: item.CRName,
              roomScale: item.Capacity
            }
          }))
        );
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
      // }
    },
    []
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toHome}
            >
              <HomeIcon />
            </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Chat
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div />
          <div className={classes.sectionDesktop}>
            <Link to="/create">
              <IconButton color="inherit">
                <AddIcon />
              </IconButton>
            </Link>
            <IconButton
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* <Header />
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
      </AppBar> */}
      {/* room */}
      <div className={classes.room}>
        <Grid container>
          {rooms.map(({ id, data: { roomName, roomScale } }) =>
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
