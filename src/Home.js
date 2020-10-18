import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"



function Home() {
    return (
        
        <div className="home_body">

            <Link to="./option_room" className="home_link">
                <img className="house" 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60" alt="" />
            </Link>
            <Link to="./option_room" className="home_link">
                 <img className="food"
                 src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
            </Link>
            <Link to="./option_room" className="home_link">
                <img className="clothing"
                 src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
            </Link>
            <Link to="./option_room" className="home_link">
                <img className="transportation"
                 src="https://images.unsplash.com/photo-1510410493114-38f0a17d66ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
            </Link>
            <Link to="./option_room" className="home_link">
                <img className="entertainment"
                 src="https://images.unsplash.com/photo-1481328101413-1eef25cc76c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60" alt="" />
            </Link>
        </div>
    )
}

export default Home
