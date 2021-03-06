import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  myTeamAssignment = this._socket.fromEvent<any>('teamAssignment');
  otherPlayerClicks = this._socket.fromEvent<any>('newServerClick');
  existingMap = this._socket.fromEvent<any>('sendMap');
  needNewMap = this._socket.fromEvent<any>('needNewGame');
  otherPlayerMoves = this._socket.fromEvent<any>('newServerMove');
  otherPlayerShoots = this._socket.fromEvent<any>('newServerShoot');
  otherPlayerSpecial = this._socket.fromEvent<any>('newServerSpecial');
  otherPlayerEndsTurn = this._socket.fromEvent<any>('serverEndTurn');
  gameListListener = this._socket.fromEvent<any>('gameList');
  singleGameListener = this._socket.fromEvent<any>('singleGame');
  enterGameListener = this._socket.fromEvent<any>('serverEnterGame');
  goToLobbyListener = this._socket.fromEvent<any>('goToLobby');
  deleteGameListener = this._socket.fromEvent<any>('serverDeleteGame');
  constructor(private _socket: Socket) { }

  getGameInfo(){
    this._socket.emit('getGameInfo');
  }
  getTeam(){
    this._socket.emit('getTeam');
  }
  checkForGameMap(){
    this._socket.emit('checkForGameMap');
  }
  sendClick(row: number, col: number, player: string){
    this._socket.emit('newClientClick', {'row': row, 'col': col, 'player': player})
  }
  sendMap(gameMap: any){
    this._socket.emit('newMap', gameMap);
  }
  sendMove(moveData){
    this._socket.emit('newClientMove', moveData);
  }
  sendShoot(shootData){
    this._socket.emit('newClientShoot', shootData);
  }
  sendSpecial(specialData){
    this._socket.emit('newClientSpecial', specialData);
  }
  sendEndTurn(player, game){
    this._socket.emit('clientEndTurn', {'player': player, 'game': game});
  }
  createNewGame(name){
    this._socket.emit('createNewGame', {'name': name});
  }
  joinGame(data){
    this._socket.emit('clientJoinGame', data);
  }
  leaveGame(){
    this._socket.emit('clientLeaveGame');
  }
  getAllGames(){
    this._socket.emit('getAllGames');
  }
  enterGame(color){
    this._socket.emit('clientEnterGame', {'color': color});
  }
  updateGame(settings){
    this._socket.emit('clientUpdateGame', settings);
  }
  deleteGame(){
    this._socket.emit('clientDeleteGame');
  }

  // testMySocketFromClient(){
  //   this._socket.emit('testSocketFromClient', {'lookAtThisKey': 'WowAValueOMG'});
  // }
}
