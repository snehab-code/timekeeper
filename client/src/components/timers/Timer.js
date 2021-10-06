import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './Timer.css'

const Timer = ({ location }) => {
    const startingTime = location.state.startingTime
    const [timeLeft, setTime] = useState(startingTime / 1000)
    const [isPaused, pause] = useState(false)
    const [rest, setRest] = useState(0)
    const netTime = timeLeft + rest * 60
    const [endTime, setEnd] = useState(
        moment(Date.now() + netTime * 1000).format('hh:mm a')
    )

    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft - hours * 3600) / 60)
    const seconds = timeLeft - hours * 3600 - minutes * 60
    const string = `${hours ? hours : '00'}:${
        !minutes ? '00' : minutes < 10 ? `0${minutes}` : minutes
    }:${!seconds ? '00' : seconds < 10 ? `0${seconds}` : seconds}`

    const remove10 = () => {
        setTime(timeLeft - 10 * 60)
        setEnd(
            moment(Date.now() + (netTime - 10 * 60) * 1000).format('hh:mm:ss a')
        )
    }

    const add10 = () => {
        setTime(timeLeft + 10 * 60)
        setEnd(
            moment(Date.now() + (netTime + 10 * 60) * 1000).format('hh:mm:ss a')
        )
    }

    const tick = () => {
        if (!isPaused) {
            setTime(timeLeft - 1)
        } else {
            setEnd(moment(Date.now() + netTime * 1000).format('hh:mm:ss a'))
        }
    }

    const restHandler = (e) => {
        setRest(e.target.value)
        setEnd(
            moment(
                Date.now() + netTime * 1000 + e.target.value * 60 * 1000
            ).format('hh:mm:ss a')
        )
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })

    // const reset = () => {}

    return (
        <React.Fragment>
            <div
                className="timer"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <h1
                    style={{
                        height: '10vmin',
                        margin: 0,
                    }}
                    onClick={() => pause(!isPaused)}
                >
                    {string}
                </h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <button className="time-button" onClick={() => remove10()}>
                        -10
                    </button>
                    <button className="time-button" onClick={() => add10()}>
                        +10
                    </button>
                </div>
            </div>

            <p>This timer will end at {endTime}</p>

            <label htmlFor="rest" style={{ fontSize: '14px' }}>
                <input
                    autoComplete="off"
                    type="text"
                    name="restBox"
                    value={rest ? rest : ''}
                    placeholder="Rest"
                    onChange={restHandler}
                />
            </label>
        </React.Fragment>
    )
}

export default Timer
