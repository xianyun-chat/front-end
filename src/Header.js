import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none'
  }
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const logout = () => {
    window.location.href = '/app/xianyun-chat/#/';
  }
  const toPw = () => {
    window.location.href = '/app/xianyun-chat/#/changepw'
  }
  const toUN = () => {
    window.location.href = '/app/xianyun-chat/#/changeun'
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Avatar className="sidebar_avatar" onClick={handleClick} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose,toUN}>修改用户名</MenuItem>
            <MenuItem onClick={handleClose,toPw}>修改密码</MenuItem>
            <MenuItem onClick={handleClose,logout}>退出登陆</MenuItem>
          </Menu>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
