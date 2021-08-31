const express = require("express")
const app = express()
const config = require("./config")
const morgan = require("morgan")
const mongoDB = require('../datastore/mongo/client')

const apiRoutes = require("../routes/api")

async function start() {
  await mongoDB.createClient().then(()=>{
    console.log('Datastore => mongodb connected')
  }).catch(error => {
    console.log(error)
  })
  app.use(express.json("*/*"))
  if (config.application.env == "production") app.use(morgan("common"))
  else {
    app.use(morgan("dev"))
  }

  app.use("/api/v1", apiRoutes)

  app.listen(config.application.port, ()=>{
    console.log('Application Running on port', config.application.port)
  })
}

async function stop() {
  await mongoDB.close().then(()=>{
    console.log('Datastore => mongodb disconnected')
  })

  process.exit(1)
}

module.exports = {
  start,
  stop
}
