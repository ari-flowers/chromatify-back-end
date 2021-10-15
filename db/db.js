require('dotenv').config()
const mongoose = require('mongoose');

const connection = "mongodb+srv://chromaUser:xe13PWbS6uPrADCM@cluster0.f5n4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

const DB_URL = process.env.DB_URL || 'mongodb://localhost/chromatifys'

// // Error / Disconnect
// mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
// mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
//
// // Connection string
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }
//
// mongoose.connect(DB_URL, options)
// mongoose.connection.on('open', () => {console.log('connected to mongoose...')})
