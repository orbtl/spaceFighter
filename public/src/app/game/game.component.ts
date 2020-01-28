import { Component, OnInit } from '@angular/core';
import { BaseObj, Fighter, Scout, Sniper, Capitol, Asteroid, MapObj } from '../map-obj';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})



export class GameComponent implements OnInit {
  // actual game map placeholder
  gameMap: any;
  gameScale = '50'; // affects height and width of table blocks
  gameBG = 'assets/img/Backgrounds/darkPurple.png'; // overall map background
  numAsteroids: number = 10; // maximum number of asteroids on map
  numRows: number = 8; // width of map
  numColumns: number = 8; // height of map
  lastBlueClicked: any; // keep track of the last thing selected to remove its selection border
  lastRedClicked: any;
  currentPlayer: any;
  inMove: any = false;
  inShoot: any = false;
  inSpecial: any = false;
  gameInfo: any;
  moveable: any;
  shootable: any;
  unitToAct: any;
  actionText: any;

  constructor() { }

  ngOnInit() {
    this.newGame(this.randomMap());
    this.currentPlayer = 'blue'; // going to need logic to figure out which player this is...
    this.gameInfo = {
      'turnNumber': this.gameMap.turn,
      'turnPlayer': this.gameMap.playerTurn,
    }
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
          this.gameMap.map[row].push(new Fighter(+row, +col, 180, 'blue'));
        }
        else if (map[row][col] == 'bScout') {
          this.gameMap.map[row].push(new Scout(+row, +col, 180, 'blue'));
        }
        else if (map[row][col] == 'bSniper') {
          this.gameMap.map[row].push(new Sniper(+row, +col, 180, 'blue'));
        }
        else if (map[row][col] == 'bCapitol') {
          this.gameMap.map[row].push(new Capitol(+row, +col, 180, 'blue'));
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
    return blueprint;
  }
  enableMove(player: any) {
    // need logic for if it's the player's turn
    if (!this.inMove && !this.inShoot && !this.inSpecial) { // no actions currently being done
      if (player == 'blue') { // blue player
        this.unitToAct = this.lastBlueClicked;
      }
      else { // red player
        this.unitToAct = this.lastRedClicked;
      }
      if (this.unitToAct.moved == false) {
        this.inMove = true;
        this.actionText = "Select a position to move to";
      }
      else {
        this.actionText = "That unit has already moved";
      }
    }
  }
  moveUnit(clicked: any, player: any){ // actually move a unit once validations are fine
    // logic to move the unit
        //logic to figure out rotation
        let row2 = clicked.location.row;
        let row1 = this.unitToAct.location.row;
        let col2 = clicked.location.col;
        let col1 = this.unitToAct.location.col;
        let rotation = 0;
        if (col2 == col1) { // they are above each other, don't want to divide by 0
          if (row2 >= row1 ) { // new position is below
            rotation = 180;
          }
          else { // new position is above
            rotation = 0;
          }
        }
        else if (col2 > col1) { // new position is to the right
          if (row2 > row1) { // position below and to the right
            rotation = 135;
          }
          else if (row2 < row1) { //position above and to the right
            rotation = 45;
          }
          else { // position directly to the right
            rotation = 90;
          }
        }
        else { // position is to the left
          if (row2 > row1) { // position below and to the left
            rotation = 225;
          }
          else if (row2 < row1) { //position above and to the left
            rotation = 315;
          }
          else { // position directly to the left
            rotation = 270;
          }
        }

        this.unitToAct.location.row = clicked.location.row;
        this.unitToAct.location.col = clicked.location.col;
        this.unitToAct.location.rotate = rotation;
        this.unitToAct.location.transform = `rotate(${rotation}deg)`;
        this.gameMap.map[row1][col1] = this.gameMap.map[row2][col2]; // move empty space object that was at destination to origin
        this.gameMap.map[row2][col2] = this.unitToAct; // move ship to destination
        this.unitToAct.moved = true;
        this.cancel(player);
  }

  clickGame(clicked: any, player: any){
    // need logic for if it's the player's turn, etc
    
    
    if (!this.inMove && !this.inShoot && !this.inSpecial) { // no actions currently being done
      this.unitInfo(clicked);
      this.actionText = "";
      if (this.moveable) { // clear old green bg highlights
        for (let item of this.moveable) {
          item.bg = '';
        }
      }
      this.shootable = [];
      this.moveable = [];
      if (clicked.moved == false && player == clicked.team) {
        this.moveRange(clicked.location.row, clicked.location.col, clicked.speed)
      }
    }
    else if (this.inMove) { // Player has selected Move
      if (this.moveable.indexOf(clicked) != -1) { // item is in the moveable list of spaces
        this.moveUnit(clicked, player);
      }
    }
    // logic for moving the highlight border
    if (player == 'blue') { // blue player's click
      if (this.lastBlueClicked) {
        this.lastBlueClicked.border = "";
      }
      clicked.border = "1px solid cyan";
      this.lastBlueClicked = clicked;

    }
    else { // red player's click
      if (this.lastRedClicked) {
        this.lastRedClicked.border = "";
      }
      clicked.border = "1px solid red";
      this.lastRedClicked = clicked;
    }
  }

  moveRange(startRow: number, startCol: number, range: number, currRow=startRow, currCol=startCol) { // recursive function to check which spaces a given unit can move to
    if (!(currRow == startRow && currCol == startCol)) { // make sure we aren't making the start location moveable to
      let item = this.gameMap.map[currRow][currCol];
      if (this.moveable.indexOf(item) == -1) { // add item to moveable list if not already in there
        item.bg = 'green';
        this.moveable.push(item);
      }
    }
    if (range < 1) { // break case when range gets down to 0
      return this;
    }
    if ((currRow-1) >= 0 && this.gameMap.map[currRow-1][currCol].hp == 0){
      this.moveRange(startRow, startCol, range-1, currRow-1, currCol);
    }
    if ((currCol-1) >= 0 && this.gameMap.map[currRow][currCol-1].hp == 0){
      this.moveRange(startRow, startCol, range-1, currRow, currCol-1);
    }
    if ((currRow+1) < this.gameMap.map.length && this.gameMap.map[currRow+1][currCol].hp == 0){
      this.moveRange(startRow, startCol, range-1, currRow+1, currCol);
    }
    if ((currCol+1) < this.gameMap.map[0].length && this.gameMap.map[currRow][currCol+1].hp == 0){
      this.moveRange(startRow, startCol, range-1, currRow, currCol+1);
    }
    return this;
  }
  cancel(player: any){
    if (player == this.gameMap.playerTurn){
      this.inMove = false;
      this.inShoot = false;
      this.inSpecial = false;
      if (this.moveable) {
        for (let item of this.moveable) {
          item.bg = '';
        }
      }
    }
    if (player == 'blue' && this.lastBlueClicked) {
      this.lastBlueClicked.border = "";
    }
    else if (player == 'red' && this.lastRedClicked) {
      this.lastRedClicked.border = "";
    }
    this.actionText = "";
  }
  unitInfo(unit: any){
    if (!(unit instanceof Fighter) && !(unit instanceof Scout) && !(unit instanceof Sniper) && !(unit instanceof Capitol) && !(unit instanceof Asteroid)){
      this.gameInfo['desc'] = 'Empty Space';
    }
    else{
      this.gameInfo['desc'] = ` Unit Type: ${unit.constructor.name} \n Player Owner: ${unit.team} \n Health: ${unit.hp}`
      if (!(unit instanceof Asteroid)) {
        this.gameInfo['desc'] += `\n Speed: ${unit.speed} units/turn \n Attack Range: ${unit.range} units`;
      }
      if (unit instanceof Fighter) {
        this.gameInfo['desc'] += `\n Missile Available: `;
        if (unit.ammo == 1) {
          this.gameInfo['desc'] += `Yes`;
        }
        else {
          this.gameInfo['desc'] += `No`;
        }
        if (unit.missile.firing == true) {
          this.gameInfo['desc'] += ` (Missile en route)`;
        }
      }
      else if (unit instanceof Scout) {
        this.gameInfo['desc'] += `\n EMP Available: `;
        if (unit.empAmmo == 1) {
          this.gameInfo['desc'] += `Yes`;
        }
        else {
          this.gameInfo['desc'] += `No`;
        }
      }
      else if (unit instanceof Sniper) {
        this.gameInfo['desc'] += `\n Charged: `;
        if (unit.charged == true) {
          this.gameInfo['desc'] += `Yes`;
        }
        else {
          this.gameInfo['desc'] += `No`;
        }
      }
      else if (unit instanceof Capitol) {
        this.gameInfo['desc'] += `\n Shield Health: ${unit.shieldHP}`;
      }
    }
  }
}
