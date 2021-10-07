import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = (...props) => {
    return (
        <Fragment>
            <h1>Timekeeper</h1>
            <Link
                className="App-link"
                to={{
                    pathname: '/timers',
                }}
            >
                Timers
            </Link>
        </Fragment>
    )
}

export default Home
