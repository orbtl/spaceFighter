module.exports = class Game {
    name;
    id;
    players;
    red;
    blue;
    gameMap;
    settings;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.players = [];
        this.settings = {
            'maxAsteroids': 10,
            'numRows': 8,
            'numCols': 8,
        }
    }
}
