import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import Header from "./Header"
import Option_room from './option_room';
import Search from './Search';
import { Grid } from "@material-ui/core"
import Create_room from './Create_room';
// import Copyright from "./Login"

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path="/create_room">
                <Create_room />
            </Route>
            <Route path="/option_room">
                <Header />
                <Search />
                <Option_room />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              {/* <Copyright /> */}
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;