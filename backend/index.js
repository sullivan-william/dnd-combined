// dependencies
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const cookieSession = require('cookie-session')
const axios = require('axios')
const { Sequelize } = require('sequelize')
const defineCurrentUser = require('./middleware/defineCurrentUser')
const path = require('path')

// middleware
app.use(cookieSession({
    name: 'session',
    keys: [ process.env.SESSION_SECRET ],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser)

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

// controllers
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))
app.use('/characters', require('./controllers/characters'))

// routes
app.get('/spells', async(req, res) => {
    try {
        let response = await axios.get('https://www.dnd5eapi.co/api/spells')
        res.status(200).send(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('/spells/:name', async(req, res) => {
    try {
        let response = await axios.get(`https://www.dnd5eapi.co/api/spells/${req.params.name}`)
        res.status(200).send(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('/classes', async(req, res) => {
    try {
        let response = await axios.get('https://www.dnd5eapi.co/api/classes')
        res.status(200).send(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('/races', async(req, res) => {
    try {
        let response = await axios.get('https://www.dnd5eapi.co/api/races')
        res.status(200).send(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
  })

// listener
app.listen(process.env.PORT || 4000, () => console.log(`Listening on ${process.env.PORT || 4000}`))