const mongoose = require('mongoose')
const config = require('../../application/config')

// create mongodb connection
function createClient(){
  return mongoose.connect(`${config.mongo.uri}/${config.mongo.dbName}`, {
    user: 'root',
    pass: 'passw0rd',
    authSource: config.mongo.authSource,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoCreate: true,
    useFindAndModify: false
  })
}

// destroy client - close mongodb connection
function close(){
  return mongoose.disconnect()
}

module.exports = {
  createClient,
  close
}