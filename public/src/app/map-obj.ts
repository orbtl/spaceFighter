export class BaseObj {
    location: any = {
        'row': 0,
        'col': 0,
        'rotate': 0,
        'transform': 'rotate(0deg)',
    }
    hp: number;
    img: String;
    imgTop: any;
    bg: String;
    speed: number;
    range: number;
    ammo: number;
    shieldHP: number;
    size: number;

    constructor (row: number, col: number, rotate: number, hp: number, speed: number, range: number){
        this.location.row = row;
        this.location.col = col;
        this.location.rotate = rotate;
        this.location.transform = `rotate(${rotate}deg)`;
        this.hp = hp;
        this.speed = speed;
        this.range = range;
        this.ammo = 1;
        this.shieldHP = 0;
        this.size = 50;
    }
    click(){
        console.log('clicked a BaseObj');
        return this;
    }
    move(targetRow: number, targetCol: number) {
        this.location.row = targetRow;
        this.location.col = targetCol;
        return this;
    }
    takeDmg(amount: number) {
        if (this.shieldHP > 0){
            this.shieldHP -= amount;
            if (this.shieldHP < 0) {
                amount = Math.abs(this.shieldHP);
            }
            else {
                amount = 0;
            }
        }
        this.hp -= amount;
        if (this.hp <= 0) {
            this.die();
        }
        return this;
    }
    die() {
        this.hp = 0;
        this.img = null;
        this.imgTop = null;
        this.bg = null;
        // maybe have code in here to change the entry to a different map null object?
        return this;
    }
}

export class Fighter extends BaseObj {
    missile: any = {
        'firing': false,
        'target': {
            'row': 0,
            'col': 0,
        },      
    }

    constructor (row: number, col: number, rotate: number, color: string) {
        super(row, col, rotate, 50, 4, 6);
        this.img = `assets/img/playerShip1_${color}.png`;
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
    click(){
        console.log('clicked a Fighter');
        return this;
    }
}

export class Scout extends BaseObj {
    empAmmo: number;
    constructor (row: number, col: number, rotate: number, color: string) {
        super(row, col, rotate, 25, 5, 3);
        this.empAmmo = 1;
        this.img = `assets/img/playerShip2_${color}.png`;
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
                targetObj.takeDmg(10);
                this.ammo = 0;
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
    click(){
        console.log('clicked a Scout');
        return this;
    }
}

export class Sniper extends BaseObj {
    charged: Boolean;
    constructor (row: number, col: number, rotate: number, color: string) {
        super(row, col, rotate, 20, 2, 12);
        this.charged = false;
        this.img = `assets/img/playerShip3_${color}.png`;
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
                        targetObj.takeDmg(60);
                        this.charged = false;
                    }
                    else {
                        targetObj.takeDmg(30);
                    }
                    this.ammo = 0;
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
    click(){
        console.log('clicked a Sniper');
        return this;
    }
}

export class Capitol extends BaseObj {
    constructor (row: number, col: number, rotate: number, color: string) {
        super(row, col, rotate, 50, 3, 2);
        this.shieldHP = 100;
        this.ammo = 2;
        this.img = `assets/img/ufo${color}.png`;
    }
    newTurn(){
        this.ammo = 2;
        while (this.ammo > 0) {
            // have logic to shoot anything within range and do low damage, like 15 or something
        }
        this.shieldHP += 10;
    }
    die(){
        console.log('Game over');
        super.die();
        // need game over logic here
        return this;
    }
    click(){
        console.log('clicked a Capitol');
        return this;
    }
}

export class Asteroid extends BaseObj {
    constructor (row: number, col: number, rotate: number, hp: number) {
        super(row, col, rotate, hp, 0, 0);
        this.ammo = 0;
        let meteorArray = ['meteorBrown_big1', 'meteorBrown_big2', 'meteorBrown_big3', 'meteorBrown_big4', 'meteorGrey_big1', 'meteorGrey_big2', 'meteorGrey_big3', 'meteorGrey_big4', 'meteorBrown_med1', 'meteorBrown_med2', 'meteorGrey_med1', 'meteorGrey_med2', 'meteorGrey_small1', 'meteorGrey_small2', 'meteorBrown_small1', 'meteorBrown_small2'];
        let randMeteorInd = (Math.floor(Math.random()*meteorArray.length));
        this.img = `assets/img/Meteors/${meteorArray[randMeteorInd]}.png`;
        if (randMeteorInd <= 7){ // big meteor
            this.size = 50;
        }
        else if (randMeteorInd <= 11) { // medium meteor
            this.size = (Math.floor(Math.random()*15)+35);
        }
        else { // small meteor
            this.size = (Math.floor(Math.random()*15)+20);
        }
    }
    newTurn(){
        let rotate = (this.location.rotate + (Math.floor(Math.random()*60)-30));
        this.location.rotate = rotate;
        this.location.transform = `rotate(${rotate}deg)`;
        return this;
    }
    click(){
        console.log('clicked an Asteroid');
        return this;
    }
}


export class MapObj { // main game object
    turn: number;
    map: any;
    playerTurn: string;
    activeClick: string;
    constructor(){
        this.turn = 0;
        this.playerTurn = 'blue';
        this.activeClick = '';
    }
}