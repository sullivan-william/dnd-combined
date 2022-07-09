// dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const { Sequelize } = require('sequelize')

// middleware
app.use(cors())

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

// listener
app.listen(process.env.PORT || 4000, () => console.log(`Listening on ${process.env.PORT || 4000}`))