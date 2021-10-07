const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')
const router = require('./config/routes')

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: process.env.G_CLIENT_ID,
    clientSecret: process.env.G_CLIENT_SECRET,
}

function verifyCallback(accessToken, refreshToken, profile, done) {
    // if you were checking passwords, you'd get password in here in accessToken.
    // you can use this to save the user who has come in
    // used for wrapping up the authentication process irae...
    console.log('Google profile', profile)
    console.log('accessToken', accessToken)
    done(null, profile)
}
console.log(AUTH_OPTIONS)
// setting up passport strategy and verifyCallback
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

const app = express()

app.use(helmet())
app.use(passport.initialize())
app.use(cors())

app.use(express.json())

app.use('/', router)

// app.get('*', (req, res) => {
//     res.json({
//         notice: 'Welcome to timekeeper',
//     })
// })

module.exports = app
