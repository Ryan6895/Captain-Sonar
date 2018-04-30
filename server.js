'use strict'
const massive = require('massive')
const connectionString = require('./config.js')
massive(connectionString).then(massiveInstance => {
  app.set('db', massiveInstance)
})
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

var app = module.exports = express()
app.use('/dist', express.static(path.resolve(__dirname, './dist')))
app.use(bodyParser.json())
app.use(cors())

// var db = app.get('db')

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

require('./build/dev-server')(app)

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.end()
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
