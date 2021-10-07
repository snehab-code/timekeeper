const mongoose = require('mongoose')

const connectionURI =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/notes-database'

const setupDB = async () => {
    try {
        await mongoose.connect(connectionURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('connected to db')
    } catch (err) {
        console.error(err, 'DB connection error above')
    }
}

module.exports = setupDB
