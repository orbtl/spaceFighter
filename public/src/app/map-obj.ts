class BaseObj {
    location: any = {
        'row': 0,
        'col': 0,
        'rotate': 'rotate(0deg)',
    }
    hp: number;
    img: String;
    imgTop: String;
    bg: String;
    speed: number;
    range: number;
    ammo: number;

    constructor (row: number, col: number, rotate: number, hp: number, speed: number, range: number){
        this.location.row = row;
        this.location.col = col;
        this.location.rotate = `rotate(${rotate}deg)`;
        this.hp = hp;
        this.speed = speed;
        this.range = range;
        this.ammo = 1;
    }
    click(){
        console.log('clicked a BaseObj');
    }
    move(targetRow: number, targetCol: number) {
        this.location.row = targetRow;
        this.location.col = targetCol;
        return this;
    }
    die(){
        this.hp = 0;
        this.img = null;
        this.imgTop = null;
        this.bg = null;
        // maybe have code in here to change the entry to a different map null object?
        return this;
    }
}

class Fighter extends BaseObj {
    missile: any = {
        'firing': false,
        'target': {
            'row': 0,
            'col': 0,
        },      
    }

    constructor (row: number, col: number, rotate: number, hp: number) {
        super(row, col, rotate, 50, 4, 6);
    }
    fireMissile(targetRow: number, targetCol: number){
        if (this.missile.firing == false && this.ammo > 0) {
            let distance = (Math.abs(targetRow - this.location.row) + Math.abs(targetCol - this.location.col));
            if (distance <= this.range) {
                this.missile.firing = true;
                this.missile.target.row = targetRow;
                this.missile.target.col = targetCol;
                this.ammo = 0;
            }
            else {
                console.log('Missile target out of range');
            }
        }
        else {
            console.log('Missile already firing or out of ammo');
        }
        return this;
    }
    newTurn(){
        if (this.missile.firing == true) {
            // do missile exploding stuff here
            //
            this.missile.firing = false;
        }
        else if (this.ammo == 0) {
            this.ammo = 1;
        }
        return this;
    }
}

class Scout extends BaseObj {
    empAmmo: number;
    constructor (row: number, col: number, rotate: number, hp: number) {
        super(row, col, rotate, 25, 5, 3);
        this.empAmmo = 1;
    }
    fireEMP(){
        if (this.empAmmo > 0) {
            // do EMP exploding stuff
        }
        else {
            console.log('Out of EMP ammo');
        }
        this.empAmmo = 0;
        return this;
    }
    shoot(targetRow: number, targetCol: number, targetObj: any) {
        if (this.ammo == 0) {
            console.log('Cannot fire more than once per turn');
            return this;
        }
        let distance = (Math.abs(targetRow - this.location.row) + Math.abs(targetCol - this.location.col));
        if (distance <= this.range) {
            try {
                targetObj.health -= 10; // do 10 damage
                this.ammo = 0;
                if (targetObj.health <= 0) {
                    targetObj.die();
                }
            } catch (error) {
                console.log('Error reducing health of target')
            }
        }
        else {
            console.log('Target out of range');
        }
    }
    newTurn(){
        this.ammo = 1;
    }
}

class Sniper extends BaseObj {
    charged: Boolean;
    constructor (row: number, col: number, rotate: number, hp: number) {
        super(row, col, rotate, 20, 2, 12);
        this.charged = false;
    }
    charge(){
        if (this.ammo > 0 && this.charged == false) {
            this.charged = true;
            this.ammo = 0;
        }
        else {
            console.log('Either out of ammo or already charged');
        }
        return this;
    }
    shoot(targetRow: number, targetCol: number, targetObj: any) {
        if (this.ammo > 0) {
            let distance = (Math.abs(targetRow - this.location.row) + Math.abs(targetCol - this.location.col));
            if (distance <= this.range) {
                try {
                    if (this.charged == true) {
                        targetObj.health -= 60; // do 60 damage
                        this.charged = false;
                    }
                    else {
                        targetObj.health -= 30 // do 30 damage
                    }
                    this.ammo = 0;
                    if (targetObj.health <= 0) {
                        targetObj.die();
                    }
                } catch (error) {
                    console.log('Error reducing health of target')
                }
            }
            else {
                console.log('Target out of range');
            }
        }
        else {
            console.log('Out of ammo');
        }
    }
    newTurn(){
        this.ammo = 1;
    }
}

class Capitol extends BaseObj {
    shieldHP: number;
    constructor (row: number, col: number, rotate: number, hp: number) {
        super(row, col, rotate, 50, 3, 2);
        this.shieldHP = 100;
        this.ammo = 2;
    }
    newTurn(){
        this.ammo = 2;
        while (this.ammo > 0) {
            // have logic to shoot anything within range and do low damage, like 15 or something
        }
        this.shieldHP += 10;
    }
    die () {
        console.log('Game over');
    }
}


export class MapObj {
    
}