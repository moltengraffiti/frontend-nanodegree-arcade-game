// Enemies our player must avoid
var Enemy = function (row, col, speed) {

    this.sprite = 'images/enemy-bug.png';
    this.row = row;
    this.step = 101;
    this.x = 0;
    this.speed = speed;
    //Bug should be on rows, not water
    this.y = +83 * this.row;
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

/* Also need image and position on board */
//** Update to a class as per instructions */


class Hero {
    constructor(col) {
        this.stepup = 101;
        this.stepside = 83;
        this.sprite = 'images/char-cat-girl.png';
        this.startX = this.stepup * col;
        this.x = this.startX;;
        this.startY = 83 * 5;
        this.y = this.startY;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(dt) {
        //collision?
        //won?
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//Random function, used to generate values for col, row and speed
let colRand = function (minNum, maxNum) {
    let num = Math.floor(Math.random() * maxNum) + minNum;
    console.log('Random num is ' + num);
    return num;
}

const player = new Hero(colRand(0, 5));

const allEnemies = [];

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
