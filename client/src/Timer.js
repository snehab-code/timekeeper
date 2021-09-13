import { useState, useEffect } from 'react'
import moment from 'moment'

const Timer = ({ startingTime }) => {
    // const { hours, min, sec } = startingTime
    const [timeLeft, setTime] = useState(startingTime / 1000)
    const [isPaused, pause] = useState(false)
    const [endTime, setEnd] = useState(
        moment(Date.now() + timeLeft * 1000).format('hh:mm a')
    )
    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft - hours * 3600) / 60)
    const seconds = timeLeft - hours * 3600 - minutes * 60
    const string = `${hours ? hours : '00'}:${
        !minutes ? '00' : minutes < 10 ? `0${minutes}` : minutes
    }:${!seconds ? '00' : seconds < 10 ? `0${seconds}` : seconds}`

    const tick = () => {
        if (!isPaused) {
            setTime(timeLeft - 1)
        } else {
            setEnd(moment(Date.now() + timeLeft * 1000).format('hh:mm:ss a'))
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000)
        return () => clearInterval(timerId)
    })

    // const reset = () => {}

    return (
        <div>
            <h1 onClick={() => pause(!isPaused)}>{string}</h1>
            This timer will end at {endTime}
        </div>
    )
}

export default Timer
