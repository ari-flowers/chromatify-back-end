const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
  isFavorite: {
    type: Boolean
  }
})

// isFave category, if its true, remove it from the favorites
// if false, add it to the category

module.exports = mongoose.model('Fave', favoriteSchema)
