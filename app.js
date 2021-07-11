const express = require('express')
const socket = require('socket.io')
const app = express()

const server = app.listen(4000, () => {

  console.log('listening to port 4000')
})

// Static files
app.use(express.static('public'))

// Socket configuration
const io = socket(server)

io.on('connection', (socket) => {
  console.log('connected to socket')

  socket.on('chat', (data)=> {
    io.sockets.emit('chat', data)
  })

  socket.on('typing', (data)=> {
    socket.broadcast.emit('typing', data)
  })
})

