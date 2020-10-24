import React, { useEffect } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux'
import { logout, selectUser, login} from "./features/userSlice"
import Login from "./Login"
import {auth} from "./firebase"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import Header from "./Header"
import Lobby from './Lobby';
import Create from "./Create"
import Chat from "./Chat"
// import Option_room from './option_room';
// import Search from './Search';
// import Create_room from './Create_room';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // user is logged in
        dispatch (
          login({
            uid:authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      }  else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        {user ?  
          ( <Switch>
              <Route path="/Create">
                <Create />
              </Route>
              <Route path="/Chat">
                <Chat />
              </Route>
              <Route path="/">
                {/* <Header />
                <Home /> */}
                <Lobby />
                {/* <Imessage /> */}
              </Route>
            </Switch> 
          ) : <Login />
        }
      </div> 
    </Router>
  );
}

export default App;
