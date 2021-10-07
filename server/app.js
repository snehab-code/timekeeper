const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const router = require('./config/routes')
const app = express()

app.use(helmet())
app.use(cors())

app.use(express.json())

app.use('/', router)

// app.get('*', (req, res) => {
//     res.json({
//         notice: 'Welcome to timekeeper',
//     })
// })

module.exports = app
