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

// get all characters from specific user
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

// get specific character from user
router.get('/characters/:characterId', async (req, res) => {
    try {
        let characterId = Number(req.params.characterId)
        const character = await Character.findOne({
            where: { character_id: characterId}
        })
        res.json(character)
    } catch (error) {
        console.log(error)
    }
})

// edit specific character
router.put('/edit/:characterId', async (req, res) => {
    try {
        let characterId = Number(req.params.characterId)
        const character = await Character.findOne({
            where: { character_id: characterId}
        })
        Object.assign(character, req.body)
        await character.save()
        res.json(character)
    } catch (error) {
        console.log(error)
    }
})


// delete character
router.delete('/:characterId', async (req, res) => {
    try {
        let characterId = Number(req.params.characterId)
        const character = await Character.findOne({
            where: { character_id: characterId}
        })
        await character.destroy()
        res.json(character)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router