const express = require('express')
var app = module.exports = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./config/routes')(app)

app.listen(3000, () => {})
