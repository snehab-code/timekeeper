import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TimerList = ({ userId }) => {
    const [userTimers, setUserTimers] = useState([])

    useEffect(() => {
        const fakeCall = setTimeout(() => {
            setUserTimers([{ id: 1, time: 7 * 3600000 }])
        }, 1000)
        return () => clearTimeout(fakeCall)
    }, [])

    return (
        <div className="">
            <h1>Test</h1>
            <div className="timer-list">
                {userTimers.map((timer) => (
                    <Link
                        className="App-link"
                        to={{
                            pathname: `/timers/${timer.id}`,
                            state: { startingTime: timer.time },
                        }}
                        key={timer.id}
                    >
                        <div className="timer-box">
                            Timer for {Math.floor(timer.time / 3600000)} hours
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TimerList
