import { Component, OnInit } from '@angular/core';
import { BaseObj, Fighter, Scout, Sniper, Capitol, Asteroid, MapObj } from '../map-obj';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})



export class GameComponent implements OnInit {
  // example game map example placeholder -- will need to be changed to be dynamically randomized at the start of a game
  exampleGameMap = [
    [0,0,0,'m','rFighter','rScout','rSniper','rCapitol'],
    ['bFighter',0,0,0,0,0,0,0],
    [0,'m',0,0,'m','m',0,0],
    [0,0,0,0,'m','m',0,0],
    [0,'bScout','bScout',0,0,0,'m',0],
    [0,0,0,'bSniper',0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,'m',0,0,0,0,'bCapitol',0],
  ];
  // actual game map placeholder
  gameMap: any;
  // map definitions:
  gameMapDef = {
    // empty space
    0: {'name': 'empty', 'img': null},
    // empty placeholding space for big meteors
    'met': {'name': 'Big Meteor', 'img': null},
    // meteors
    'mbb1': {'name': 'meteorBrownBig1', 'img': 'assets/img/Meteors/meteorBrown_big1.png', 'size': '100'},
    'mbb2': {'name': 'meteorBrownBig2', 'img': 'assets/img/Meteors/meteorBrown_big2.png', 'size': '100'},
    'mbb3': {'name': 'meteorBrownBig3', 'img': 'assets/img/Meteors/meteorBrown_big3.png', 'size': '100'},
    'mbb4': {'name': 'meteorBrownBig4', 'img': 'assets/img/Meteors/meteorBrown_big4.png', 'size': '100'},
    'mgb1': {'name': 'meteorGreyBig1', 'img': 'assets/img/Meteors/meteorGrey_big1.png', 'size': '100'},
    'mgb2': {'name': 'meteorGreyBig2', 'img': 'assets/img/Meteors/meteorGrey_big2.png', 'size': '100'},
    'mgb3': {'name': 'meteorGreyBig3', 'img': 'assets/img/Meteors/meteorGrey_big3.png', 'size': '100'},
    'mgb4': {'name': 'meteorGreyBig4', 'img': 'assets/img/Meteors/meteorGrey_big4.png', 'size': '100'},
    'mbm1': {'name': 'meteorBrownMedium1', 'img': 'assets/img/Meteors/meteorBrown_med1.png', 'size': '50'},
    'mbm2': {'name': 'meteorBrownMedium2', 'img': 'assets/img/Meteors/meteorBrown_med2.png', 'size': '50'},
    'mgm1': {'name': 'meteorGreyMedium1', 'img': 'assets/img/Meteors/meteorGrey_med1.png', 'size': '50'},
    'mgm2': {'name': 'meteorGreyMedium2', 'img': 'assets/img/Meteors/meteorGrey_med2.png', 'size': '50', 'bg': ''},
    // player ships
    'bFighter': {'name': 'blue fighter', 'img': 'assets/img/playerShip1_blue.png', 'size': '50'},
    'bScout': {'name': 'blue scout', 'img': 'assets/img/playerShip2_blue.png', 'size': '50', 'imgTop': 'assets/img/Lasers/laserGreen02.png', 'imgTopPosX': '20px', 'imgTopPosY': '0px', 'imgTopAlpha': '0.7', 'imgTopRotate': 'rotate(45deg)'},
    'bSniper': {'name': 'blue sniper', 'img': 'assets/img/playerShip3_blue.png', 'size': '50'},
    'bCapitol': {'name': 'blue capitol', 'img': 'assets/img/ufoBlue.png', 'size': '50'},
    'rFighter': {'name': 'red fighter', 'img': 'assets/img/playerShip1_red.png', 'size': '50'},
    'rScout': {'name': 'red scout', 'img': 'assets/img/playerShip2_red.png', 'size': '50'},
    'rSniper': {'name': 'red sniper', 'img': 'assets/img/playerShip3_red.png', 'size': '50'},
    'rCapitol': {'name': 'red capitol', 'img': 'assets/img/ufored.png', 'size': '50'},
  }
  gameScale = '50'; // affects height and width of table blocks
  gameBG = 'assets/img/Backgrounds/darkPurple.png'; // overall map background

  constructor() { }

  ngOnInit() {
    this.newGame(this.exampleGameMap);
  }
  newGame(map: any) {
    this.gameMap = new MapObj();
    this.generateMap(map);
  }
  generateMap(map: any){
    this.gameMap.map = [];
    for (let row in map){
      this.gameMap.map.push([]);
      for (let col in map[row]){
        if (map[row][col] == 'm') {
          this.gameMap.map[row].push(new Asteroid(+row, +col, 0, 20)); // + operator converts string to number
        }
        else if (map[row][col] == 'bFighter') {
          this.gameMap.map[row].push(new Fighter(+row, +col, 0, 'blue'));
        }
        else if (map[row][col] == 'bScout') {
          this.gameMap.map[row].push(new Scout(+row, +col, 0, 'blue'));
        }
        else if (map[row][col] == 'bSniper') {
          this.gameMap.map[row].push(new Sniper(+row, +col, 0, 'blue'));
        }
        else if (map[row][col] == 'bCapitol') {
          this.gameMap.map[row].push(new Capitol(+row, +col, 0, 'blue'));
        }
        else if (map[row][col] == 'rFighter') {
          this.gameMap.map[row].push(new Fighter(+row, +col, 0, 'red'));
        }
        else if (map[row][col] == 'rScout') {
          this.gameMap.map[row].push(new Scout(+row, +col, 0, 'red'));
        }
        else if (map[row][col] == 'rSniper') {
          this.gameMap.map[row].push(new Sniper(+row, +col, 0, 'red'));
        }
        else if (map[row][col] == 'rCapitol') {
          this.gameMap.map[row].push(new Capitol(+row, +col, 0, 'red'));
        }
        else {
          this.gameMap.map[row].push(new BaseObj(+row, +col, 0, 0, 0, 0)); // push empty base object
        }
      }
    }
  }
  
}
