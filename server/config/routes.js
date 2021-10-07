const express = require('express')
const timersRouter = require('../src/routes/timers/timers.routes')
const authRouter = require('../src/routes/auth/auth.routes')
const router = express.Router()

router.use('/timers', timersRouter)
router.use('/auth', authRouter)

router.get('/', function (req, res) {
    res.send('Welcome to the timekeeper api!')
})

module.exports = router
