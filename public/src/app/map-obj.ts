export class BaseObj {
    location: any = {
        'row': 0,
        'col': 0,
        'rotate': 0,
        'transform': 'rotate(0deg)',
    }
    hp: number;
    img: string;
    imgAlpha: string;
    imgTop: any;
    imgTopLast: any;
    bg: string;
    speed: number;
    range: number;
    ammo: number;
    shieldHP: number;
    size: number;
    border: string;
    team: string;
    moved: boolean;
    unitName: string;

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
        this.border = "";
        this.team = "neutral";
        this.moved = false;
        this.imgAlpha = "1";
        this.unitName = "Empty Space";
    }
    click(){
        console.log('clicked an empty space');
        this.border = "1px solid red";
        return this;
    }
    move(targetRow: number, targetCol: number) {
        this.location.row = targetRow;
        this.location.col = targetCol;
        return this;
    }
    takeDmg(amount: number) {
        var gameOver = false;
        if (this.shieldHP > 0){
            this.shieldHP -= amount;
            if (this.shieldHP < 0) {
                amount = Math.abs(this.shieldHP);
            }
            else {
                amount = 0;
            }
            if (this.shieldHP <= 0) {
                this.shieldHP = 0;
                this.imgTop = null;
            }
            this.imgTop.alpha= (this.shieldHP / 100);
        }
        this.hp -= amount;
        if (this.hp <= 0) {
            this.hp = 0;
            if (this.unitName == 'Capitol') {
                gameOver = true;
            }
        }
        this.explode();
        return gameOver;
    }
    explode(){
        var self = this;
        let exploded = 0;
        this.imgAlpha = '1';
        if (this.imgTop) {
            this.imgTopLast = {
                'img': this.imgTop.img,
                'alpha': this.imgTop.alpha,
                'transform': this.imgTop.transform,
                'size': this.imgTop.size
            };
        }
        var fade = setInterval(function(){
            if (exploded < 40) { // explosion gif
                self.imgTop = {
                    'img': `assets/img/explosion/${Math.floor(exploded/5)}.gif`,
                    'alpha': 1,
                    'transform': `rotate(${exploded*2}deg)`,
                    'size': 50,
                };
            }
            if (self.hp <= 0 && exploded >= 30) { // fade out if dead
                let alpha = parseFloat(self.imgAlpha);
                if (alpha <= 0 && exploded >= 49) {
                    clearInterval(fade);
                    self.img = '';
                    self.imgTop = null;
                    return self;
                }
                else {
                    alpha -= 0.05;
                    self.imgAlpha = alpha.toString();
                }
            }
            if (exploded >= 40 && self.hp > 0) {
                if (self.imgTopLast) {
                    self.imgTop = {
                        'img': self.imgTopLast.img,
                        'alpha': self.imgTopLast.alpha,
                        'transform': self.imgTopLast.transform,
                        'size': self.imgTopLast.size
                    };
                    self.imgTopLast = null;
                }
                else {
                    self.imgTop = null;
                }
                clearInterval(fade);
            }
            if (exploded >= 60) {
                clearInterval(fade);
            }
            exploded ++;
        }, 10); // interval ms
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
        super(row, col, rotate, 50, 4, 4);
        this.img = `assets/img/playerShip1_${color}.png`;
        this.team = color;
        this.unitName = "Fighter";
    }
    fireMissile(targetRow: number, targetCol: number){
        this.missile.firing = true;
        this.missile.target.row = targetRow;
        this.missile.target.col = targetCol;
        this.ammo = 0;
        this.imgTop = {
            'img': 'assets/img/Power-ups/missileSmall.png',
            'alpha': 1,
            'transform': '',
            'size': 40,
        }
        this.missileSpin();
        return this;
    }
    missileSpin(){
        this.imgTop = {
            'img': 'assets/img/Power-ups/missileSmall.png',
            'alpha': 1,
            'transform': '',
            'size': 40,
        }
        var self = this;
        var time = 0;
        var spin = setInterval(function(){
            if (self.missile.firing == false) {
                clearInterval(spin);
            }
            self.imgTop.img = 'assets/img/Power-ups/missileSmall.png';
            self.imgTop.alpha = 1,
            self.imgTop.transform = `rotate(${time*4}deg)`;
            self.imgTop.size = 40;
            time++;
        }, 10)
        return this;
    }
    newTurn(){
        if (this.missile.firing == true) {
            this.missile.firing = false;
            this.imgTop = null;
        }
        else if (this.ammo == 0) {
            this.ammo = 1;
        }
        this.moved = false;
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
        super(row, col, rotate, 25, 5, 2);
        this.empAmmo = 1;
        this.img = `assets/img/playerShip2_${color}.png`;
        this.team = color;
        this.unitName = "Scout";
    }
    fireEMP(){
        this.imgTop = {
            'img': 'assets/img/Effects/EMP.png',
            'alpha': '0.1',
            'transform': '',
            'size': 60,
        }
        var self = this;
        let time = 0;
        var emp = setInterval(function(){
            self.imgTop.size = (time*2.2 + 60);
            self.imgTop.transform = `rotate(${time*6}deg)`;
            if (time < 40) { // emp animation
                self.imgTop.alpha = ((time/10) + 0.1).toString();
            }
            else if (time == 40) {
                self.imgTop.alpha = '1';
            }
            else if (time > 40 && time < 60) {
                self.imgTop.alpha = (parseFloat(self.imgTop.alpha) - 0.05);
            }
            else if (time >= 60) {
                self.imgTop.alpha = '0';
                self.imgTop = null;
                clearInterval(emp);
            }
            time ++;
        }, 7); // interval ms
        return this;
    }
    shoot(targetObj: any) {
        var gameOver = false;
        try {
            gameOver = targetObj.takeDmg(10);
            this.ammo = 0;
        } catch (error) {
            console.log('Error reducing health of target')
        }
        return gameOver;
    }
    newTurn(){
        this.moved = false;
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
        super(row, col, rotate, 20, 2, 4);
        this.charged = false;
        this.img = `assets/img/playerShip3_${color}.png`;
        this.team = color;
        this.unitName = "Sniper";
    }
    charge(){
        this.imgTop = {
            'img': 'assets/img/Power-ups/bolt_gold.png',
            'alpha': 1,
            'transform': '',
            'size': 30,
        }
        this.range = 6;
        return this;
    }
    shoot(targetObj: any) {
        var gameOver = false;
        try {
            if (this.charged == true) {
                gameOver = targetObj.takeDmg(70);
                this.charged = false;
                this.imgTop = null;
                this.range = 4;
            }
            else {
                gameOver = targetObj.takeDmg(30);
            }
            this.ammo = 0;
        } catch (error) {
            console.log('Error reducing health of target')
        }
        return gameOver;
    }
    newTurn(){
        if (this.charged == false) {
            this.moved = false;
        }
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
        this.team = color;
        this.imgTop = {
            'img': 'assets/img/Effects/shield3.png',
            'alpha': '1',
            'transform': '',
            'size': 60,
        };
        this.unitName = "Capitol";
    }
    shoot(targetObj: any) {
        var gameOver = false;
        try {
            gameOver = targetObj.takeDmg(15);
            this.ammo -= 1;
        } catch (error) {
            console.log('Error reducing health of target')
        }
        return gameOver;
    }
    newTurn(){
        this.moved = false;
        this.ammo = 2;
        this.shieldHP += 10;
        if (this.shieldHP > 100) {
            this.shieldHP = 100;
        }
        this.imgTop = {
            'img': 'assets/img/Effects/shield3.png',
            'alpha': (this.shieldHP / 100),
            'transform': '',
            'size': 60,
        }
    }
    die(){
        console.log('Game over');
        super.explode();
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
        let randMeteorHPDiff = (Math.floor(Math.random()*10)-5); // random from -5 to 5 to add to size
        this.hp = (this.size + randMeteorHPDiff);
        this.location.rotate = (Math.floor(Math.random()*360));
        this.location.transform = `rotate(${this.location.rotate}deg)`;
        this.unitName = "Asteroid";
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
    winner: any;
    constructor(){
        this.turn = 0;
        this.playerTurn = 'blue';
        this.activeClick = '';
    }
}