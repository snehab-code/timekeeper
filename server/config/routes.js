const express = require('express')
const timersRouter = require('../src/routes/timers/timers.routes')
const router = express.Router()

router.use('/timers', timersRouter)

router.get('/', function (req, res) {
    res.send('Welcome to the timekeeper api!')
})

module.exports = router
