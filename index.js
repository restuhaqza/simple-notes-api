const config = require('./application/config')
const http = require('http')
const app = require('./application')

const server = http.createServer(app.start())

server.listen(config.application.port, '127.0.0.1')
server.on('listening', ()=>{
  console.log('Application running on port ' + config.application.port)
})