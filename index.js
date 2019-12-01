const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const PORT = 5000

const mongoose = require('mongoose').mongoURI
//  DB config
const db = require('./config/keys')
const router = require('./router.js')

//  connect to MongoDB
// mongoose.connect(db).then(() => {
//   console.log('MongoDB successfuly connected')
// }).catch(err => {
//   console.log(err);
//   console.log('\x1b[31m\x1b[1m MongoDB Not Connected')
// })

app.set('view engine', 'pug')

//  for parsing application/json
app.use(bodyParser.json())

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }))
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array())
app.use(express.static('views'))

//  add this line after all the midllewares in express
app.use('/home' ,router)

//  show this text in when we visit this URL(localhost:5000/)
app.use('/', (req, res) => {
  res.send('this is the default web page')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
 })