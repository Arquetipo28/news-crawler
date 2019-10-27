// Require npm modules
const express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser')

var app = module.exports = express()

const routes = require('./src/config/routes')

// Use morgan to log connections, status, and errors in console
app.use(logger('dev'))
// Use body-parser to catch params sended as url encoded and json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Call routes from the root path
app.use('', routes)

// Start server on port 3000
app.listen(3000, () => {
})
