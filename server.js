console.log('starting server...');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public/dist/public"));
require('./server/config/routes.js')(app);
const server = app.listen(8000, () => console.log('listening on port 8000'));
//socket stuff
const io = require('socket.io')(server);
let sockets = [];
let players = {
    'blue': null,
    'red': null
};
let currentGameMap = null;
io.on('connection', socket => {
    if (sockets.indexOf(socket) == -1){
        sockets.push(socket);
        console.log(`Socket ${socket.id} added`);
    }
    console.log(`All Sockets: ${sockets}`)
    if (players.blue == null) {
        players.blue = {'socketID': socket.id, 'player': 'blue'};
        console.log(`Assigned socket id ${socket.id} blue team`)
        socket.emit('teamAssignment', {'team': 'blue'})
    }
    else if (players.red == null) {
        players.red = {'socketID': socket.id, 'player': 'red'};
        console.log(`Assigned socket id ${socket.id} red team`)
        socket.emit('teamAssignment', {'team': 'red'})
    } else { // no players available
        console.log(`Disconnecting socket id ${socket.id} because there are no available player spots in game`)
        let i = sockets.indexOf(socket);
        sockets.splice(i, 1);
        socket.disconnect();
    }
    if (currentGameMap == null) {
        socket.emit('needNewGame');
    }
    else {
        socket.emit('sendMap', currentGameMap);
    }

    // end stuff to do on connection always

    socket.on('newClientClick', function(data) {
        // io.emit('testSocketFromServer', {'testinfo': 'bleh'});
        socket.broadcast.emit('newServerClick', data);
    })
    socket.on('newMap', function(data) {
        currentGameMap = data;
        console.log('got new map: ', data);
        socket.broadcast.emit('sendMap', currentGameMap);
    })
    socket.on('newClientMove', function(data) {
        console.log('Got move data');
        socket.broadcast.emit('newServerMove', data);
    })
    socket.on('newClientShoot', function(data) {
        console.log('Got shoot data');
        socket.broadcast.emit('newServerShoot', data);
    })



    socket.on('disconnect', function() {
        console.log(`Socket disconnected with id ${socket.id}`)
        if (players.blue && players.blue.socketID == socket.id) {
            players.blue = null;
        }
        if (players.red && players.red.socketID == socket.id) {
            players.red = null;
        }
        let i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    })
})
