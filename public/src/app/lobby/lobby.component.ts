import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  gameList: any;
  singleGame: any;
  redAvail: boolean;
  blueAvail: boolean;
  private _gameListObs: Subscription;
  private _singleGameObs: Subscription;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameListObs = this._gameService.gameListListener.subscribe(data => {
      this.gameList = data.gameList;
      this.singleGame = null;
    })
    this._singleGameObs = this._gameService.singleGameListener.subscribe(data => {
      this.singleGame = data.singleGame;
      this.gameList = null;
    })
  }
  createGame(){
    let name = prompt('Enter a game name.');
    this._gameService.createNewGame(name);
  }
  joinGame(gameToJoin){
    this._gameService.joinGame(gameToJoin);
  }
  leaveGame(){
    this._gameService.leaveGame();
  }
}
