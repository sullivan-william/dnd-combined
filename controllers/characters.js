const router = require('express').Router()
const db = require("../models")

const { Character } = db

router.post('/new', async (req, res) => {
    try {
        console.log(req.body)
        const character = await Character.create({
            name: req.body.name,
            race: req.body.race,
            class: req.body.class,
            user_id: req.body.user_id
        })
        res.json(character)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router