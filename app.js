const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html'); 
});

io.on('connection', (socket) => {
    console.log("A user connected");
    socket.on('disconnect',() => {
        console.log("Now disconnected.");
    });
    socket.on('Chat message', (msg) => {
        io.emit('Chat message', msg);
    });
});

http.listen(3000, () => {
    console.log ("Up and running at 3000");
});