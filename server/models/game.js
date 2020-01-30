export class Game {
    name;
    id;
    players;
    red;
    blue;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.players = [];
    }
}
export class Player {
    id;
    team;
    constructor(id){
        this.id = id;
}