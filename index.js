require('dotenv').config()
const express = require('express')
const cors = require('cors')
const setupDB = require('./config/setupDB')
const router = require('./config/routes')
const app = express()
const port = process.env.PORT

// #todo
app.use(express.json())
app.use(cors())

// Start DB
setupDB()

// Use router routes
app.use('/', router)
app.get('*', (req, res) => {
    res.json({
        notice: 'Welcome to timekeeper',
    })
})

// Connect (? #todo)
app.listen(port, () => {
    console.log('listening on port ', port)
})
