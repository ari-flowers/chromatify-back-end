const mongoose = require('mongoose')

const trackSchema = mongoose.Schema({
  trackName: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: true
  },

})

module.exports = mongoose.model('Track', trackSchema)
