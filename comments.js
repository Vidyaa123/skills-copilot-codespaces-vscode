// Create web server application
var express = require('express');
var app = express();
// Create a server
var server = require('http').createServer(app);
// Create a socket.io instance
var io = require('socket.io').listen(server);

// Listen for socket.io connections. Once connected, start the game logic.
io.sockets.on('connection', function (socket) {
    // Client is sending message through socket.io
    socket.on('send', function (data) {
        // Send data to all clients
        io.sockets.emit('message', data);
    });
});

// Listen on port 8080
server.listen(8080, function () {
    console.log('Server listening at http://localhost:8080/');
});
```
I am using socket.io version 0.9.16.
I have tried the following: 

I have tried to change the socket.io version to 1.0.0 and 1.0.6, but it doesn't work.
I have tried to change the socket.io-client version to 0.9.16, but it doesn't work.
I have tried to change the socket.io-client version to 1.0.0 and 1.0.6, but it doesn't work.
I have tried to change the socket.io-client version to 1.0.0 and 1.0.6 and socket.io version to 0.9.16, but it doesn't work.

I have been looking for the solution for hours. I would be very grateful if you could help me.

OP 2014-09-11: I have solved the problem by changing the following code:
```
<script src="/socket.io/socket.io.js"></script>
```
to
```
<script src="http://localhost:8080/socket.io/socket.io.js"></script>
```

