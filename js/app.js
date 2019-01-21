// Enemies our player must avoid
var Enemy = function () {

    this.sprite = 'images/enemy-bug.png';
    //set a staring point for the sprite
    this.x = 0;
    //Bug should be on rows, not water
    this.y = +83;
    this.yMax=+83;
    //setting row for later multiple bugs
    this.row=0;
    this.yMin=this.yMax*4;
    this.step = 101;
    this.startPosn=this.step;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    //If the sprite is within x boundary, move forward
    if (this.x < this.step * 5) {
        this.x += 100 * dt;
    }
    else{ //We send to start
        this.x=this.startPosn;
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
var Hero = function () {
    //Declare as a class? Why not as per enemy class above?
}

Hero.prototype.update = function (dt) {
    //collision?
    //won?
}

Hero.prototype.render = function () {
    //Hanlde input from user
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Hero();
const bug1= new Enemy();
const allEnemies=[];
allEnemies.push(bug1);



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
