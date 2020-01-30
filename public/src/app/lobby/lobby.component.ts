import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  gameList: any;
  singleGame: any;
  settings: any = {
    'maxAsteroids': 0,
    'numCols': 0,
    'numRows': 0
  };
  private _gameListObs: Subscription;
  private _singleGameObs: Subscription;
  private _enterGameObs: Subscription;

  constructor(private _gameService: GameService, private _router: Router) { }

  ngOnInit() {
    this._gameService.getAllGames();
    this._gameListObs = this._gameService.gameListListener.subscribe(data => {
      this.gameList = data.gameList;
      this.singleGame = null;
    })
    this._singleGameObs = this._gameService.singleGameListener.subscribe(data => {
      this.singleGame = data.singleGame;
      this.gameList = null;
      this.settings = this.singleGame.settings;
    })
    this._enterGameObs = this._gameService.enterGameListener.subscribe(data => {
      this.enterGame();
    })
  }
  createGame(){
    let gameName = prompt('Enter a game name.');
    this._gameService.createNewGame(gameName);
  }
  joinGame(gameToJoin){
    let userName = prompt('Enter a user name to display');
    this._gameService.joinGame({'gameToJoin': gameToJoin, 'userName': userName});
  }
  leaveGame(){
    this._gameService.leaveGame();
  }
  startGame(color) {
    this._gameService.enterGame(color);
  }
  enterGame(){
    this._router.navigate(['/game']);
  }
  changeSettings(){
    this._gameService.updateGame(this.settings);
  }
}
