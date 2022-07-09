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

// listener
app.listen(process.env.PORT || 4000, () => console.log(`Listening on ${process.env.PORT || 4000}`))