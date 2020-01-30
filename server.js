const Game = require('./server/models/game');
const Player = require('./server/models/player');

console.log('starting server...');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public/dist/public"));
require('./server/config/routes.js')(app);
const server = app.listen(8000, () => console.log('listening on port 8000'));
//socket stuff
const io = require('socket.io')(server);
let exampleGame = new Game('testGame', 1);
let games = [exampleGame];
let currentGameMap = null;
io.on('connection', socket => {
    let gameFound = false;
    for (let game of games) {
        for (let player of game.players) {
            if (player.id == socket.id) {
                socket.emit('singleGame', {'singleGame': game});
                socket.join(`game${game.id}`);
                gameFound = true;
            }
        }
    }
    if (gameFound == false) {
        console.log(`Socket ${socket.id} added`);
        socket.emit('gameList', {'gameList': games});
        socket.join('lobby');
    }

    socket.on('createNewGame', function(data) {
        console.log('Creating new game and socket room');
        if (games.length == 0) {
            var thisID = 1;
        }
        else {
            var thisID = (games[games.length-1].id + 1); // one more than the last id in the list of games
        }
        let newGame = new Game(data.name, thisID);
        games.push(newGame);
        io.to('lobby').emit('gameList', {'gameList': games});
    })
    socket.on('clientJoinGame', function(data) {
        socket.leave('lobby');
        socket.join(`game${data.id}`);
        for (let eachGame of games){
            if (eachGame.id == data.id) {
                let thisPlayer = new Player(socket.id);
                eachGame.players.push(thisPlayer);
                io.to('lobby').emit('gameList', {'gameList': games});
                io.to(`game${data.id}`).emit('singleGame', {'singleGame': eachGame});
            }
        }
    })
    socket.on('clientLeaveGame', function() {
        for (let eachGame of games) {
            for (let playerIndex in eachGame.players) {
                if (socket.id == eachGame.players[playerIndex].id) {
                    eachGame.players.splice(playerIndex, 1);
                    socket.leave(`game${eachGame.id}`);
                    socket.join('lobby');
                    io.to(`game${eachGame.id}`).emit('singleGame', {'singleGame': eachGame})
                    io.to('lobby').emit('gameList', {'gameList': games});
                }
            }
        }
    })
    socket.on('getAllGames', function() {
        socket.emit('gameList', {'gameList': games});
    })





    // if (players.blue == null) {
    //     players.blue = {'socketID': socket.id, 'player': 'blue'};
    //     console.log(`Assigned socket id ${socket.id} blue team`)
    //     socket.emit('teamAssignment', {'team': 'blue'})
    // }
    // else if (players.red == null) {
    //     players.red = {'socketID': socket.id, 'player': 'red'};
    //     console.log(`Assigned socket id ${socket.id} red team`)
    //     socket.emit('teamAssignment', {'team': 'red'})
    // } else { // no players available
    //     console.log(`Disconnecting socket id ${socket.id} because there are no available player spots in game`)
    //     let i = sockets.indexOf(socket);
    //     sockets.splice(i, 1);
    //     socket.disconnect();
    // }
    // if (currentGameMap == null) {
    //     socket.emit('needNewGame');
    // }
    // else {
    //     socket.emit('sendMap', currentGameMap);
    // }

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
    socket.on('newClientSpecial', function(data) {
        console.log('Got Special Ability Data');
        socket.broadcast.emit('newServerSpecial', data);
    })
    socket.on('clientEndTurn', function(data) {
        console.log('Got End Turn data');
        socket.broadcast.emit('serverEndTurn', data);
    })



    socket.on('disconnect', function() {
        console.log(`Socket disconnected with id ${socket.id}`)
    })
})
