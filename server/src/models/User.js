const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
    },
    tokens: [
        {
            token: {
                type: String,
            },
            createdAt: {
                type: Date,
                default: Date.now(),
            },
        },
    ],
})

const User = mongoose.model('User', userSchema)

module.exports = User
