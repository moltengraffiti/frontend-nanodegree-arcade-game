# Classic Arcade Game Clone Project

## Table of Contents
- [Classic Arcade Game Clone Project](#classic-arcade-game-clone-project)
  - [Table of Contents](#table-of-contents)
  - [About the Game](#about-the-game)
  - [Instructions](#instructions)
    - [Running the Game](#running-the-game)
    - [Playing the Game](#playing-the-game)
  - [Known Issues](#known-issues)
  - [Future Improvements](#future-improvements)
  - [Authors](#authors)
  - [License](#license)

## About the Game

In this game you have a Player and Enemies (bugs). The goal of the player is to reach the water, without colliding into any one of the enemies, using the keyboard arrow keys.

## Instructions

The Game can be downloaded or cloned from the GitHub repository [here](https://github.com/moltengraffiti/frontend-nanodegree-arcade-game)

### Running the Game

To run the game open the **index.html** file in a browser.

### Playing the Game

Using the keyboard arrow keys &larr;, &uarr;, &rarr; and &darr; the player can navigate the board, with the aim of avoiding the bugs on the paved rows and reaching the water. Colliding with a bug returns the player to the starting position. If the player reached the water, the game is won and a modal appears. The modal allows the game to be replayed or exited.

## Known Issues

1. The Game can't be 're-won' if the 'Reset' option is used during the game or if the option to play again is chosen from the modal. Similarly, this also removes the collision detection.
2. The time and move stats on the page and modal show no information as the functionality hasn't been implemented yet.
3. The modal appears above the game and not overlaying the screen.


## Future Improvements

1. Fix known issues above.
2. Track score or moves accros games
3. Allow users to select the player charachter

## Authors

Source code provided as part of Project 3- Classic Arcade Game Clone in the FEND nanodegree by Udacity. Interactivity using javascript and some styling added.

## License

[MIT](https://choosealicense.com/licenses/mit/)
