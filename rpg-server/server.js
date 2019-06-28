const express = require('express')()
const dotenv = require('dotenv')
const cors = require('cors')
const http = require('http').Server(express)
const io = require('socket.io')(http)
dotenv.config()

const port = process.env.PORT

const app = express

http.listen(port, () => {
    console.info('`http.listen()`', `Listening on port ${port}`)
})

io.on('connection', (socket) => {
    socket.on('joined', (data) => {
        console.info('[joined]', data)
        socket.broadcast.emit('joined', (data))
    })
})

