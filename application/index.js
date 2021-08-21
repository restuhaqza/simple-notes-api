const express = require("express")
const app = express()
const config = require("./config")
const morgan = require("morgan")

const apiRoutes = require("../routes/api")

function start() {
  app.use(express.json("*/*"))
  if (config.application.env == "production") app.use(morgan("common"))
  else {
    app.use(morgan("dev"))
  }

  app.use("/api/v1", apiRoutes)

  return app
}

function stop() {}

module.exports = {
  start,
}
