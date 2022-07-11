const router = require('express').Router()
const db = require("../models")

const { Character, User } = db

router.post('/new', async (req, res) => {
    console.log(req.body)
    // const character = await Character.create({
    //     name: req.body.name,
    //     race: req.body.race,
    //     class: req.body.class
    // })
    // res.json(character)
})

module.exports = router