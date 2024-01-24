const server = require('express')();
const https = require('https').createServer(server);
const io = require('socket.io')(https);
let players = [];

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    players.push(socket.id);

    if (players.length === 1 ) {
        io.emit('isPlayerA');
    };

    socket.on('dealCards', function () {
        io.emit('dealCards');
    });

    socket.on('cardPlayed', function (gameObject, isPlayerA){
        io.emit('cardPlayed', gameObject, isPlayerA);
    });

    socket.on('disconnect', function() {
        console.log('A user disconnected: ' + socket.id);
        players = players.filter(player => player !== socket.id);
    });
});

https.listen('sbarton237.github.io', function () {
    console.log('Server started');
})