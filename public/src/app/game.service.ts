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
  // testData = this._socket.fromEvent<any>('testSocketFromServer');
  constructor(private _socket: Socket) { }

  sendClick(row: number, col: number, player: string){
    this._socket.emit('newClientClick', {'row': row, 'col': col, 'player': player})
  }
  sendMap(blueprint: any){
    this._socket.emit('newMap', blueprint);
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
  sendEndTurn(player){
    this._socket.emit('clientEndTurn', {'player': player});
  }
  createNewGame(name){
    this._socket.emit('createNewGame', {'name': name});
  }
  joinGame(game){
    this._socket.emit('clientJoinGame', game);
  }

  // testMySocketFromClient(){
  //   this._socket.emit('testSocketFromClient', {'lookAtThisKey': 'WowAValueOMG'});
  // }
}
