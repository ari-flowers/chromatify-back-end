const express = require('express')
const router = express.Router()
const Track = require('../models/track')


//get routes
//INDEX
router.get('/', async (req,res) =>{
  try{
    const allChromas = await Track.find()
    res.status(200).json(allChromas)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//SHOW
router.get('/:id', async (req, res) => {
  try {
    const findChroma = await Track.findById(req.params.id)
    res.status(200).json(findChroma)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//CREATE / POST
router.post('/', async (req, res) => {
  try{
    const newChroma = await Track.create(req.body)
    res.status(200).json(newChroma)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleteChroma = await Track.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteChroma)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updateChroma = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateChroma)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})


module.exports = router
