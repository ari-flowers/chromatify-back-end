const express = require('express')
const router = express.Router()
const Track = require('../models/track')


//get routes
//INDEX
router.get('/', async (req,res) =>{
  try{
    const allTracks = await Track.find()
    res.status(200).json(allTracks)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//SHOW
router.get('/:id', async (req, res) => {
  try {
    const findTrack = await Track.findById(req.params.id)
    res.status(200).json(findTrack)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//CREATE / POST
router.post('/', async (req, res) => {
  try{
    const newTrack = await Track.create(req.body)
    res.status(200).json(newTrack)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleteTrack = await Track.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteTrack)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updateTrack = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateTrack)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})


module.exports = router
