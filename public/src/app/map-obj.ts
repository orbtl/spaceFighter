class BaseObj {
    location: any = {
        'row': 0,
        'col': 0,
        'rotate': 'rotate(0deg)',
    }
    hp: Number;
    img: String;
    imgTop: String;
    bg: String;

    constructor (row: Number, col: Number, rotate: Number, hp: Number){
        this.location.row = row;
        this.location.col = col;
        this.location.rotate = `rotate(${rotate}deg)`;
        this.hp = hp;
    }
    click(){
        console.log('clicked a BaseObj');
    }
}

class Fighter extends BaseObj {
    ammo: Number;
    missile: any = {
        'firing': false,
        'target': {
            'row': 0,
            'col': 0,
        },      
    }

    constructor (row: Number, col: Number, rotate: Number, hp: Number) {
        super(row, col, rotate, 50);
        this.ammo = 1;
    }
    fireMissile(targetRow: Number, targetCol: Number){
        if (this.missile.firing == false && this.ammo > 0) {
            this.missile.firing = true;
            this.missile.target.row = targetRow;
            this.missile.target.col = targetCol;
            this.ammo = 0;
        }
        return this;
    }
    newTurn(){
        if (this.missile.firing == true) {
            // do missile exploding stuff
        }
        else if (this.ammo == 0) {
            this.ammo = 1;
        }

    }
}

class Scout extends BaseObj {
    ammo: Number;
    emp: any = {
        
    }
}


export class MapObj {
    
}