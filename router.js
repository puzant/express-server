const express = require('express')
const router = express.Router()

router.post('/main', (req, res) => {
  console.log(req.body)
  res.send('your request was recivied')
})

router.get('/main', (req, res) => {
  res.render('main', 
  { title: 'Hey',
   message: 'Hello there this is a test!',
   description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })
})

router.get('/hello', (req, res) => {
  res.send('hello there')
})

router.all('/test', (req, res) => {
  res.send("HTTP methods don't have any effect on this route")
})

//  create dynamic routes
router.get('/:id', (req, res) => {
  res.send("The ID you specified is: " + req.params.id)
})

//  dynamic route with name & id as req.params
router.get('/:name/:id', (req, res) => {
  res.send("Name is: " + req.params.name  + ', ' + "ID is: " + req.params.id)
})

module.exports = router