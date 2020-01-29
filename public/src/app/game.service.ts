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
  
  // testMySocketFromClient(){
  //   this._socket.emit('testSocketFromClient', {'lookAtThisKey': 'WowAValueOMG'});
  // }
}
