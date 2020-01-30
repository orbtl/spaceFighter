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
playerGameList = {};
io.on('connection', socket => {
    let gameFound = false;
    for (let game of games) {
        for (let player of game.players) {
            if (player.id == socket.id) {
                socket.emit('singleGame', {'singleGame': game});
                socket.join(`game${game.id}`);
                playerGameList[socket.id] = game;
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
        io.in('lobby').emit('gameList', {'gameList': games});
    })
    socket.on('clientJoinGame', function(data) {
        socket.leave('lobby');
        socket.join(`game${data.gameToJoin.id}`);
        for (let eachGame of games){
            if (eachGame.id == data.gameToJoin.id) {
                let thisPlayer = new Player(socket.id, data.userName);
                eachGame.players.push(thisPlayer);
                playerGameList[socket.id] = eachGame;
                io.in('lobby').emit('gameList', {'gameList': games});
                io.in(`game${data.gameToJoin.id}`).emit('singleGame', {'singleGame': eachGame});
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
                    playerGameList[socket.id] = null;
                    io.in(`game${eachGame.id}`).emit('singleGame', {'singleGame': eachGame})
                    io.in('lobby').emit('gameList', {'gameList': games});
                }
            }
        }
    })
    socket.on('getAllGames', function() {
        socket.emit('gameList', {'gameList': games});
    })
    socket.on('getTeam', function() {
        let team = '';
        for (let game of games) {
            if (game.red && game.red.id == socket.id) {
                team = 'red';
                socket.emit('teamAssignment', {'team': team});
            }
            if (game.blue && game.blue.id == socket.id) {
                team = 'blue';
                socket.emit('teamAssignment', {'team': team});
            }
        }
        if (team == '') {
            socket.emit('goToLobby');
        }
    })
    socket.on('checkForGameMap', function() {
        for (let game of games) {
            if ((game.red && game.red.id == socket.id) || (game.blue && game.blue.id == socket.id)) {
                if (game.gameMap == null) {
                    socket.emit('needNewGame');
                }
                else {
                    socket.emit('sendMap', game.gameMap);
                }
            }
        }
    })

    // end stuff to do on connection always

    socket.on('newClientClick', function(data) {
        if (playerGameList[socket.id]) {
            socket.to(`game${playerGameList[socket.id].id}`).emit('newServerClick', data);
        }
        else {
            console.log('Error -- player game not found in playerGameList')
        }
    })
    socket.on('newMap', function(data) {
        if (playerGameList[socket.id]) {
            playerGameList[socket.id].gameMap = data;
            console.log('got new map: ', data);
            socket.to(`game${playerGameList[socket.id].id}`).emit('sendMap', data);
        }
        else {
            console.log('Error -- player game not found in playerGameList')
        }
    })
    socket.on('newClientMove', function(data) {
        if (playerGameList[socket.id]) {
            console.log('Got move data');
            socket.to(`game${playerGameList[socket.id].id}`).emit('newServerMove', data);
        }
        else {
            console.log('Error -- player game not found in playerGameList')
        }
    })
    socket.on('newClientShoot', function(data) {
        if (playerGameList[socket.id]) {
            console.log('Got shoot data');
            socket.to(`game${playerGameList[socket.id].id}`).emit('newServerShoot', data);
        }
        else {
            console.log('Error -- player game not found in playerGameList')
        }
    })
    socket.on('newClientSpecial', function(data) {
        if (playerGameList[socket.id]) {
            console.log('Got Special Ability Data');
            socket.to(`game${playerGameList[socket.id].id}`).emit('newServerSpecial', data);
        }
        else {
            console.log('Error -- player game not found in playerGameList')
        }
    })
    socket.on('clientEndTurn', function(data) {
        if (playerGameList[socket.id]) {
            console.log('Got End Turn data');
            socket.to(`game${playerGameList[socket.id].id}`).emit('serverEndTurn', data);
        }
        else {
            console.log('Error -- player game not found in playerGameList')
        }
    })
    socket.on('clientEnterGame', function(data) {
        console.log(`client entering game as team ${data.color}`);
        for (let eachGame of games) {
            for (let eachPlayer of eachGame.players) {
                if (socket.id == eachPlayer.id) {
                    if (data.color == 'red' && eachGame.red == null) {
                        eachGame.red = eachPlayer;
                        socket.emit('serverEnterGame');
                        console.log('player entered game as red');
                    }
                    else if (data.color == 'blue' && eachGame.blue == null) {
                        eachGame.blue = eachPlayer;
                        socket.emit('serverEnterGame');
                        console.log('player entered game as blue');
                    }
                    else {
                        console.log('failed to enter game');
                        io.in(`game${eachGame.id}`).emit('singleGame', {'singleGame': eachGame});
                    }
                    socket.to(`game${eachGame.id}`).emit('singleGame', {'singleGame': eachGame});
                }
            }
        }
    })



    socket.on('disconnect', function() {
        console.log(`Socket disconnected with id ${socket.id}`)
        for (let eachGame of games) {
            for (let playerIndex in eachGame.players) {
                if (socket.id == eachGame.players[playerIndex].id) {
                    eachGame.players.splice(playerIndex, 1);
                    socket.leave(`game${eachGame.id}`);
                    socket.join('lobby');
                    io.in(`game${eachGame.id}`).emit('singleGame', {'singleGame': eachGame})
                    io.in('lobby').emit('gameList', {'gameList': games});
                }
            }
        }
    })
})
