//dependencies
require('dotenv').config()
const express = require('express')
const methodOverride  = require('method-override')
const cors = require('cors')
require('./db/db')
const chromatifyController = require('./controllers/chromatify')

//config
const mongoose = require ('mongoose')
const app = express ()
const db = mongoose.connection
const PORT = process.env.PORT || 9000

//database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `Chromatify`
//middleware

//whitelist heroku and surge later on!
const whiteList = ["http://localhost:3000"]
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  }
}

//use public folder for static assets
app.use(express.static('public'))
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(cors(corsOptions))
app.use(express.json())
app.use('/chromatify', chromatifyController)


//listener

app.listen(PORT, () => {
  console.log('👁 👄👁 🎧 🎵', `Welcome to Chromatify, we're live on ${PORT}`);
})
