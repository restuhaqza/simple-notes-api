const express = require('express')
const app = express()
const apiRoutes = require('../routes/api')

function start(){
  app.use(express.json('*/*'))
  app.use('/api/v1', apiRoutes)
  return app
}

module.exports = {
  start
}