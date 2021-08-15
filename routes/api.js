const express = require('express')
const router = express.Router()

const noteHandler = require('../handler/notes')

router.post('/notes', noteHandler.create)
router.get('/notes', noteHandler.getAll)
router.get('/notes/:id', noteHandler.getById)
router.put('/notes', noteHandler.update)
router.delete('/notes/:id', noteHandler.deleteById)

module.exports = router