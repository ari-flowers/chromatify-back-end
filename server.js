//dependencies
require('dotenv').config()
const express = require('express')
const methodOverride  = require('method-override')
const cors = require('cors')
require('./db/db')
const chromatifyController = require('./controllers/chromatify')

//config
const app = express ()

const PORT = process.env.PORT || 9000

//middleware

//whitelist heroku and surge later on!
const whiteList = ["http://localhost:3000", "http://localhost:9000", process.env.DB_URL ]
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || 1 === 1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  }
}

//use public folder for static assets
app.use(express.static('public'))

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(cors(corsOptions))
app.use(express.json())
app.use('/chromatify', chromatifyController)


//listener

app.listen(PORT, () => {
  console.log(`Welcome to Chromatify, we're live on ${PORT}`);
})
