require('./db')
const express = require('express')
const bodyParser = require('body-parser')

var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json())

app.listen(4000,() => console.log('server started at :4000'))

app.use('/postMessages',postMessageRoutes)