import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import {setTheme} from './features/themeSlice';
import {useDispatch} from 'react-redux';
import {Button} from '@material-ui/core';
import {login} from './post/login';

function Home() {
  const dispatch = useDispatch();
  const [themes, setThemes] = useState();
  const storage = window.localStorage;
  // storage['userId'] = userId

  const traceThemeIdOne = () => {
    // dispatch(
    //   setTheme({
    //     themeId: 'food'
    //   })
    // );
    storage['themeId'] = 'food';
  };
  const traceThemeIdTwo = () => {
    // dispatch(
    //   setTheme({
    //     themeId: 'clothing'
    //   })
    // );
    storage['themeId'] = 'clothing';
  };
  const traceThemeIdThree = () => {
    // dispatch(
    //   setTheme({
    //     themeId: 'go'
    //   })
    // );
    storage['themeId'] = 'go';
  };
  const traceThemeIdFour = () => {
    // dispatch(
    //   setTheme({
    //     themeId: 'home'
    //   })
    // );
    storage['themeId'] = 'home';
  };
  const traceThemeIdFive = () => {
    // dispatch(
    //   setTheme({
    //     themeId: 'entrainment'
    //   })
    // );
    storage['themeId'] = 'entrainment';
  };

  return (
    <div className="home_body">
      <Link to="/lobby" onClick={traceThemeIdOne}>
        <Button>
          <img
            className="star"
            src={require("./images/home.jpg")}
            alt=""
          />
          <p>住</p>
        </Button>
      </Link>

      <Link to="/lobby">
        <Button onClick={traceThemeIdTwo}>
          <img
            className="star"
            src={require("./images/food.jpg")}
            alt=""
          />
          <p>食</p>
        </Button>
      </Link>

      <Link to="/lobby">
        <Button onClick={traceThemeIdThree}>
          <img
            className="star"
            src={require("./images/clothing.jpg")}
            alt=""
          />
          <p>衣</p>
        </Button>
      </Link>

      <Link to="/lobby">
        <Button onClick={traceThemeIdFour}>
          <img
            className="star"
            src={require("./images/go.jpg")}
            alt=""
          />
          <p>行</p>
        </Button>
      </Link>
      <Link to="/lobby">
        <Button onClick={traceThemeIdFive}>
          <img
            className="star"
            src={require("./images/entertainment.jpg")}
            alt=""
          />
          <p>娱乐</p>
        </Button>
      </Link>
      <Button onClick={traceThemeIdFive}>
        <img
          className="star"
          src="https://images.unsplash.com/photo-1481328101413-1eef25cc76c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
          alt=""
        />
        <p>其他</p>
      </Button>
    </div>
  );
}

export default Home;
