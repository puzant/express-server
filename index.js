const express = require('express')
const app = express()
const PORT = 5000

const router = require('./router.js')

app.set('view engine', 'pug')

app.use('/home' ,router)

//  show this text in when we visit this URL(localhost:5000/)
app.use('/', (req, res) => {
  res.send('this is the default web page')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
 })