import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import {  setTheme } from "./features/themeSlice" 
import { useDispatch } from "react-redux"
import { Button }from "@material-ui/core"
import db from "./firebase"
import {login} from './post/password'

function Home() {
    const dispatch = useDispatch()
    const [themes,setThemes] = useState();

    const traceThemeIdOne = () => {
        dispatch(
            setTheme({
                themeId: "food",
            })
        )
    }
    const traceThemeIdTwo = () => {
        dispatch(
            setTheme({
                themeId: "clothing",
            })
        )
    }
    const traceThemeIdThree = () => {
        dispatch(
            setTheme({
                themeId: "go",
            })
        )
    }
    const traceThemeIdFour = () => {
        dispatch(
            setTheme({
                themeId: "home",
            })
        )
    }
    const traceThemeIdFive = () => {
        dispatch(
            setTheme({
                themeId: "entrainment",
            })
        )
    }
    useEffect(() => {

        //DB
        db.collection('theme').onSnapshot((snapshot) => 
            setThemes(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                }))
            )
        );
    }, [])

    return (
        <div className="home_body">

                <Button onClick={() => {
                    login('123456', '888888', (result) => {
                        if (result === true) {
                            window.location.href = 'http://localhost:3000/lobby'
                        }
                        // else {} // 给用户一个警告
                    }) 
                }}>接口测试</Button>

                <Link to="/lobby" onClick={traceThemeIdOne}>
                <Button >
                    <img className="house" 
                    src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60" alt="" />
                </Button>
                </Link>
                
                <Link to="/lobby"  >
                <Button onClick={traceThemeIdTwo}>
                    <img className="food"
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
                </Button>
                </Link>

                <Link to="/lobby"  >
                <Button onClick={traceThemeIdThree}>
                    <img className="clothing"
                    src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
                </Button>
                </Link>

                <Link to="/lobby"  >
                <Button onClick={traceThemeIdFour}>
                    <img className="transportation"
                    src="https://images.unsplash.com/photo-1510410493114-38f0a17d66ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
                </Button>
                </Link>

                <Link to="/lobby"  >
                <Button onClick={traceThemeIdFive}>
                    <img className="entertainment"
                    src="https://images.unsplash.com/photo-1481328101413-1eef25cc76c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
                </Button>
                </Link>
        </div>
    )
}

export default Home
