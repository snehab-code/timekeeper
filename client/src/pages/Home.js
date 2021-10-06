import React from 'react'
import { Link } from 'react-router-dom'

const Home = (...props) => {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <Link
                className="App-link"
                to={{
                    pathname: '/timers',
                }}
            >
                Timers
            </Link>
        </React.Fragment>
    )
}

export default Home
