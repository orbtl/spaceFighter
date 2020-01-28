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
    [0,0,0,'a','rFighter','rScout','rSniper','rCapitol'],
    ['bFighter',0,0,0,0,0,0,0],
    [0,'a',0,0,'a','a',0,0],
    [0,0,0,0,'a','a',0,0],
    [0,'bScout','bScout',0,0,0,'a',0],
    [0,0,0,'bSniper',0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,'a',0,0,0,0,'bCapitol',0],
  ];
  // actual game map placeholder
  gameMap: any;
  gameScale = '50'; // affects height and width of table blocks
  gameBG = 'assets/img/Backgrounds/darkPurple.png'; // overall map background
  numAsteroids: number = 8;
  numRows: number = 8;
  numColumns: number = 8;

  constructor() { }

  ngOnInit() {
    this.newGame(this.randomMap());
  }
  newGame(map: any) {
    this.gameMap = new MapObj();
    this.generateMap(map);
    //debugging
    // this.gameMap.map[4][1].imgTop = {
    //   'img': 'assets/img/Lasers/laserGreen02.png',
    //   'alpha': 0.7,
    //   'rotate': 'rotate(45deg)',
    // };
  }
  generateMap(map: any){
    this.gameMap.map = [];
    for (let row in map){
      this.gameMap.map.push([]);
      for (let col in map[row]){
        if (map[row][col] == 'a') {
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
  randomMap(){
    let blueprint = [];
    for (let i=0; i<this.numRows; i++) {
      blueprint.push([]);
      for (let j=0; j<this.numColumns; j++) {
        blueprint[i].push(0);
      }
    }
    blueprint[0][0] = "bCapitol";
    blueprint[0][1] = "bSniper";
    blueprint[1][0] = "bFighter";
    blueprint[1][1] = "bScout";
    blueprint[blueprint.length-1][blueprint[0].length-1] = "rCapitol";
    blueprint[blueprint.length-1][blueprint[0].length-2] = "rSniper";
    blueprint[blueprint.length-2][blueprint[0].length-1] = "rFighter";
    blueprint[blueprint.length-2][blueprint[0].length-2] = "rScout";
    // random asteroids
    let asteroidsMade = 0;
    let asteroidArray = [];
    while (asteroidsMade < (this.numAsteroids/2)) { // only go to half hte number of asteroids to mirro the playing field
      let randRow = (Math.floor(Math.random()*blueprint.length));
      let randCol = (Math.floor(Math.random()*blueprint[0].length));
      if (blueprint[randRow][randCol] == 0) {
        blueprint[randRow][randCol] = 'a';
        asteroidsMade ++;
        asteroidArray.push([randRow, randCol]);
      }
    }
    for (let asteroidToMirror of asteroidArray){ // mirroring the playing field for balance
      let mirrorCoordRow = (blueprint.length - asteroidToMirror[0] - 1);
      let mirrorCoordCol = (blueprint[0].length - asteroidToMirror[1] - 1);
      if (blueprint[mirrorCoordRow][mirrorCoordCol] == 0) {
        blueprint[mirrorCoordRow][mirrorCoordCol] = 'a';
      }
    }
    console.log(blueprint);
    return blueprint;
  }
}
