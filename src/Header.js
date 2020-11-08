import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Avatar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {selectUser} from './features/userSlice';
import {useSelector} from 'react-redux';
import {auth} from './firebase';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Header() {
  const classes = useStyles();
  const user = useSelector(selectUser);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/home">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" className={classes.title}>
          Chat
        </Typography>
        <Link to="/">
          <Avatar className="sidebar_avatar" onClick={() => auth.signOut()} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
