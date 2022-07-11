const router = require('express').Router()
const db = require("../models")

const { Character, User } = db

router.post('/new', async (req, res) => {
    try {
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

router.get('/:userId', async (req, res) => {
    try {
        let userId = Number(req.params.userId)
        if (isNaN(userId)) {
            res.status(404).json({ message: 'Invalid userId' })
        } else {
            const characters = await Character.findAll({
                where: { user_id: userId }
            })
            res.json(characters)
        }
    } catch (error) {
        console.log(error)
    }
})

router.put('/edit/:characterId', async (req, res) => {
    try {
        let characterId = Number(req.params.characterId)
        const character = await Character.findOne({
            where: { character_id: characterId}
        })
        res.json(character)
        console.log(character)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router