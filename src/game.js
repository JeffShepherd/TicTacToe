class Game {
  constructor() {
    this.playerOne = new Player(1, "X"),
    this.playerTwo = new Player(2, "O"),
    this.startingPlayer = 1,
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

 switchStartingPlayer() {
   if(this.startingPlayer === 1) {
    this.startingPlayer = 2
   } else {
     this.startingPlayer = 1
   }
   this.turn = this.startingPlayer
 }

 takeTurn(boardSpace) {
  if(this.checkForOpenSpace(boardSpace)) {
    this.gameBoard[boardSpace] = this.turn === 1 ? this.playerOne.token : this.playerTwo.token
    return true
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

  checkForDraw() {
    const emptySpaces = this.gameBoard.filter(space => space === 0)
    if(emptySpaces.length) {
      return false
    } else {
      return true
    }
  }

  addToWinCount() {
    if(this.turn === 1) {
      this.playerOne.wins ++
    } else {
      this.playerTwo.wins ++
    }
  }

 checkForWinner() {
  if(this.checkForHorizontalWin() || this.checkForVerticalWin() || this.checkForDiagWin()) {
    this.addToWinCount()
    return true
  }
  return false
 }

 checkForHorizontalWin() {
  if(this.gameBoard[0] && this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2]){
    return true
  } else if(this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5]){
    return true
  } else if(this.gameBoard[6] && this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8]){
    return true
  }
  return false
 }

 checkForVerticalWin() {
  if(this.gameBoard[0] && this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6]){
    return true
  } else if(this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7]){
    return true
  } else if(this.gameBoard[2] && this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8]){
    return true
  }
  return false
 }
 
 checkForDiagWin() {
  if(this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8]) {
    return true
  } else if(this.gameBoard[4] && this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6]) {
    return true
  }
  return false
 }

}