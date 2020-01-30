module.exports = class Game {
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
