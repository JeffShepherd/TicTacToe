class Game {
  constructor() {
    this.playerOne = new Player(1, 'test1'),
    this.playerTwo = new Player(2, 'test2'),
    this.turn = 1,
    this.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

 resetGameBoard() {
   this.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
 }

 switchTurn() {
   if(this.turn === 1) {
     this.turn = 2
   } else {
     this.turn = 1
   }
 }

 takeTurn(boardSpace) {
  if(this.checkForOpenSpace()) {
    this.gameBoard[boardspace] = this.turn === 1 ? this.playerOne.token : this.playerTwo.token
    // check for winner?
  } else {
    return false
  }
 }

 checkForOpenSpace(boardSpace) {
  if(this.gameBoard[boardSpace] === 0) {
    return true
  } else {
    return false
  }
 }

}