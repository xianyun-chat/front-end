import React from "react";
import {  Toolbar, AppBar,TextField, FormHelperText} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';


const useStyles = makeStyles((theme) => ({
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

function Search() {
  
    const classes = useStyles();
    
    return (
        <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              label="id or name"
              variant="standard"
            />
          </div>
          <Link to="./create_room">
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <AddIcon />
            </Fab>
          </Link>
        </Toolbar>
      </AppBar>
    )
}

export default Search
