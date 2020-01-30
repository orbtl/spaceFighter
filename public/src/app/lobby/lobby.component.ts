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
  private _gameListObs: Subscription;
  private _singleGameObs: Subscription;
  private _enterGameObs: Subscription;

  constructor(private _gameService: GameService, private _router: Router) { }

  ngOnInit() {
    this._gameListObs = this._gameService.gameListListener.subscribe(data => {
      this.gameList = data.gameList;
      this.singleGame = null;
    })
    this._singleGameObs = this._gameService.singleGameListener.subscribe(data => {
      this.singleGame = data.singleGame;
      this.gameList = null;
    })
    this._enterGameObs = this._gameService.enterGameListener.subscribe(data => {
      this.enterGame();
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
  startGame(color) {
    this._gameService.enterGame(color);
  }
  enterGame(){
    this._router.navigate(['/game']);
  }
}
