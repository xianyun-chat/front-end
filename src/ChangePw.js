import React from 'react'
import { Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import {modifyPassword} from "./post/modifyPassword"

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
        textDecoration: 'none',
        color:'white',
    },
  }));

function ChangePW() {
    const classes = useStyles();
    var storage = window.localStorage;
    const userID = storage.userId
    const change = () => {
      const oldPassword = document.getElementById('oldPassword').value;
      const newPassword = document.getElementById('newPassword').value;
      const verifyPassword = document.getElementById('verifyPassword').value;

      if (newPassword !== verifyPassword) {
        alert('两次输入的密码不一致！');
      } else {
        modifyPassword(userID, oldPassword,newPassword, (result) => {
          console.log(result);
          console.log(userID)
          if (result) {
            alert('修改成功');
            window.location.href = '/';
          } else {
            alert('修改失败');
          }
        });
      }
    };
    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Change
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="oldPassword"
                label="old Password"
                name="oldPassword"
                autoComplete="oldPassword"
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="new password"
                label="New Password"
                type="password"
                id="newPassword"
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Verify password"
                label="Verify Password"
                type="password"
                id="verifyPassword"
                />
                <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={change}
                >
                  Change
                </Button>
            </form>
            </div>
        </Grid>
        </Grid>
  );
}

export default ChangePW
