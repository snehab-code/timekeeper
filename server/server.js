const http = require('http')
require('dotenv').config()
const port = process.env.PORT
const app = require('./app')
const setupDB = require('./config/setupDB')

const server = http.createServer(app)

async function startServer() {
    await setupDB()
    server.listen(port, () => {
        console.log('listening on port ', port)
    })
}

startServer()
