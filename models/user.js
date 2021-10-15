const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userId: {
    type: String
  },
  awsId: {
    type: String
  },
  email: {

  },
  time: {
    type: String
  }
})
