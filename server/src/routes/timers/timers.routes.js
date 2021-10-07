const express = require('express')

const timersRouter = express.Router()

timersRouter.get('/', function (req, res) {
    res.send('Time is up!')
})

module.exports = timersRouter
