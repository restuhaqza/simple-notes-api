const http = require('http')
const app = require('./application')

const server = http.createServer(app.start())

server.listen('3000', '127.0.0.1')
server.on('listening', ()=>{
  console.log('Application running on port 3000')
})