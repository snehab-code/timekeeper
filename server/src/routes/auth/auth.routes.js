const express = require('express')
const passport = require('passport')

const authRouter = express.Router()

authRouter.get(
    '/google',
    passport.authenticate('google', {
        scope: ['email'],
    }),
    (req, res) => {
        return res.send('google login')
    }
)

// google servers will call this endpoint so an authorization code can be exchanged for an access token
authRouter.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failure',
        // successRedirect: '/success',
        session: false,
    }),
    (req, res) => {
        res.redirect('http://localhost:3000/login')
    }
)

authRouter.get('/failure', (req, res) => {
    return res.send({ error: 'login failed' })
})

authRouter.get('/logout', (req, res) => {
    return res.send('logout')
})

module.exports = authRouter
