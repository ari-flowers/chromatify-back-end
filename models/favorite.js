const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
  userID: {

  },
  timeStamp: {

  },
  songName: {

  },
  songArtist: {

  }
})

//look into useEffect to rerender on change, set the state to whatever is in the database

// isFave category, if its true, remove it from the favorites
// if false, add it to the category

//One to many association?

// A track can have one favorite
// Favorites can have many tracks
module.exports = mongoose.model('Fave', favoriteSchema)
