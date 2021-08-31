const config = require('./application/config')
// const http = require('http')
const app = require('./application')

app.start()

process.on('SIGINT', async()=>{
  await app.stop()
})