const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    socket.on('disconnect', function() {
        console.log('A user disconnected: ' + socket.id);
    });
});

http.listen('sbarton237.github.io', function () {
    console.log('Server started');
})