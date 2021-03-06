// Enemies our player must avoid

'use strict';

var Enemy = function (row, col, speed) {

    this.sprite = 'images/enemy-bug.png';
    this.row = row;
    this.step = 101;
    this.x = 0;
    this.speed = speed;
    //Bug should be on rows, not water
    this.y = +(83 * this.row) - 20;
    this.offScreen = -this.step * col;
    this.startPosn = this.x - this.offScreen;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    //If the sprite is within x boundary, move forward by speed
    if (this.x < this.step * 5) {
        this.x += this.speed * dt;
    }
    else { //We send to start
        this.x = this.startPosn;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Hero {
    constructor(col) {
        this.stepUp = 83;
        this.stepSide = 101;
        this.sprite = 'images/char-cat-girl.png';
        this.startX = this.stepSide * col;
        this.x = this.startX;
        this.startY = 83 * 5;
        this.y = (this.startY) - 20;
        this.Won = false;

    }

    //The render function should be an inherited super class for both Player/Enemy - will continue to work on this
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }


    update(dt) {
        //Also add the char padding in here, or won is never met
        if (this.y == this.stepUp - 20) {
            this.Won = true;
            console.log('Game has been won');
        }
        //check for collision
        //This took forever to figure out, relied on Matt Cranford's site to get it done
        for (let enemy of allEnemies) {

            if (this.y === enemy.y
                && (
                    (enemy.x + enemy.step / 2 > this.x) && (enemy.x < (this.x + this.stepUp / 2)))) {
                console.log('Crash');
                //Using instance name to refer properties or methods in its own prototype methods violates OOP encapsulation principle.
                //player.reset to this.reset
                this.reset();
            }
        }

    }
    //Game can't be won again if reset or replay is used??
    reset() {
        //this.Won = false;
        this.x = this.startX;
        //Rookie error - startY changed to (-20) as per startY in constructor
        this.y = this.startY-20;
    }

    handleInput(key) {

        if (key === 'left' && this.x > 0) {
            this.x -= this.stepSide;
        }
        else if (key === 'up' && this.y > this.stepUp) {
            this.y -= this.stepUp;
        }
        else if (key === 'right' && (this.x < this.stepSide * 4)) {
            this.x += this.stepSide;
        }
        //Ammended this to be x4 StepUp, not x5
        else if (this.y < this.stepUp * 4) {
            this.y += this.stepUp;
        }
    }
}


let colRand = function (minNum, maxNum) {
    //From stackExchange the fn below allows generation of rands where min is not 1
    let num = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    console.log('Random num is ' + num);
    return num;
}

//Let's create some characters, some enemies and the Hero (player)

//Hero's starting position can be in any of the last row cells, use a random num function to determine where
const player = new Hero(colRand(0, 4));
const allEnemies = [];

//Create three enemies, and determine their start position using a random number generating function
for (let i = 1; i < 4; i++) {
    let bug = new Enemy(i, -colRand(0, 5), colRand(80, 300));
    allEnemies.push(bug);
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//Random function, used to generate values for col, row and speed

