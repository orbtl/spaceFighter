import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // example game map example placeholder -- will need to be changed to be dynamically randomized at the start of a game
  exampleGameMap = [
    [0,0,0,'mbm1',0],
    [0,'mbm1',0,0,0],
    [0,0,0,0,0],
    [0,0,0,'bSniper',0],
  ];
  // actual game map placeholder
  gameMap: any;
  // map definitions:
  gameMapDef = {
    0: {'name': 'empty', 'img': null},
    'mbm1': {'name': 'meteorBrownMedium1', 'img': 'assets/img/Meteors/meteorBrown_med1.png'},
    'mbm2': {'name': 'meteorBrownMedium2', 'img': 'assets/img/Meteors/meteorBrown_med2.png'},
    'mgm1': {'name': 'meteorGreyMedium1', 'img': 'assets/img/Meteors/meteorGrey_med1.png'},
    'mgm2': {'name': 'meteorGreyMedium2', 'img': 'assets/img/Meteors/meteorGrey_med2.png'},
    'bFighter': {'name': 'blue fighter', 'img': 'assets/img/playerShip1_blue.png'},
    'bScout': {'name': 'blue scout', 'img': 'assets/img/playerShip2_blue.png'},
    'bSniper': {'name': 'blue sniper', 'img': 'assets/img/playerShip3_blue.png'},
    'bCapitol': {'name': 'blue capitol', 'img': 'assets/img/ufoBlue.png'},
  }
  constructor() { }

  ngOnInit() {
    this.generateMap(this.exampleGameMap);
  }
  generateMap(map){
    this.gameMap = [];
    for (let row in map){
      this.gameMap.push([]);
      for (let col in map[row]){
        this.gameMap[row].push(this.gameMapDef[map[row][col]]); // puts the value from gameMapDef into each grid location in gameMap based on the key provided from each grid location in map passed in parameters
      }
    }
  }
}
