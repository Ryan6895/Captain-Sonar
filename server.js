'use strict'
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')))

app.use(function (req, res, next) {
  var NodeSSPI = require('node-sspi')
  var nodeSSPIObj = new NodeSSPI({
    retrieveGroups: true
  })
  nodeSSPIObj.authenticate(req, res, function () {
    res.finished || next()
  })
})
// app.use(function (req, res, next) {
//   var out =
//     'Hello ' +
//     req.connection.user +
//     '! Your sid is ' +
//     req.connection.userSid +
//     ' and you belong to following groups:<br/><ul>'
//   if (req.connection.userGroups) {
//     for (var i in req.connection.userGroups) {
//       out += '<li>' + req.connection.userGroups[i] + '</li><br/>\n'
//     }
//   }
//   out += '</ul>'
//   res.send(out)
// })

require('./build/dev-server')(app)

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.end()
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
