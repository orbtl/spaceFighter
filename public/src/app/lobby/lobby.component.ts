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
  private _gameListObs: Subscription;
  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameListObs = this._gameService.gameListListener.subscribe(data => {
      this.gameList = data.gameList;
    })
  }
  createGame(){
    let name = ''
    this._gameService.createNewGame(name);
  }
  joinGame(gameToJoin){
    this._gameService.joinGame(gameToJoin);
  }

}
