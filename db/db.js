require('dotenv').config()
const mongoose = require('mongoose');
const connection = process.env.DB_URL || 'mongodb://localhost/chromatify'
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
