const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const session = require('express-session')

const { User } = db

// authenticate at login
router.post('/', async (req, res) => {
    try {
        let user = await User.findOne({
            where: { username: req.body.username }
        })
    
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            res.status(404).json({ 
                message: `Could not find a user with the provided username and password` 
            })
        } else {
            req.session.user_id = user.user_id
            res.json({ user })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// signout route
router.get('/signout', (req, res) => {
    try {
        req.session.user_id = null
        res.json(req.currentUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
  })

// find curent user
router.get('/profile', async (req, res) => {
    try {
        res.json(req.currentUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router
