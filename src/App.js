import React, { useEffect } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux'
import { logout, selectUser, login} from "./features/userSlice"
import Login from "./Login"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import Header from "./Header"
import Lobby from './Lobby';
import Create from "./Create"
import Chat from "./Chat"
import SignUp from './SignUp';
import ChangePW from './ChangePw';
import ChangeUN from './ChangeUN';


function App() {
  
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if(authUser) {
  //       // user is logged in
  //       dispatch (
  //         // get users' information
  //         login({
  //           uid: authUser.uid,
  //           photo: authUser.photoURL,
  //           email: authUser.email,
  //           displayName: authUser.displayName,
  //         })
  //       );
  //     }  else {
  //       // user is logged out
  //       dispatch(logout());
  //     }
  //   });
  // }, []);
  return (
    <Router >
      <div className="app">
               <Switch>
                <Route path="/" exact>
                  <Login />
                </Route>
                <Route path="/home">
                  <Header />
                  <Home />
                </Route>
                <Route path="/lobby" >
                  <Lobby />
                </Route>
                <Route path="/create">
                  <Create />
                </Route>
                <Route path="/chat">
                  <Chat />
                </Route>
                <Route path="/signUp" >
                  <SignUp />
                </Route>
                <Route path="/changepw">
                  <ChangePW />
                </Route>
                <Route path="/changeun">
                  <ChangeUN />
                </Route>
              </Switch> 
        </div> 
    </Router>
  );
}

export default App;
