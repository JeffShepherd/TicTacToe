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

 checkForWinner() {
  if(this.checkForHorizontalWin() || this.checkForVerticalWin() || this.checkForDiagWin()) {
    return true
  }
  return false
 }

 checkForHorizontalWin() {
  if(!this.gameBoard[0] || this.gameBoard[0] != this.gameBoard[1] || this.gameBoard[1] != this.gameBoard[2]){
    return false
  } else if(!this.gameBoard[3] || this.gameBoard[3] != this.gameBoard[4] || this.gameBoard[4] != this.gameBoard[5]){
    return false
  } else if(!this.gameBoard[6] || this.gameBoard[6] != this.gameBoard[7] || this.gameBoard[7] != this.gameBoard[8]){
    return false
  }
  return true
 }

 checkForVerticalWin() {
  if(!this.gameBoard[0] || this.gameBoard[0] != this.gameBoard[3] || this.gameBoard[3] != this.gameBoard[6]){
    return false
  } else if(!this.gameBoard[1] || this.gameBoard[1] != this.gameBoard[4] || this.gameBoard[4] != this.gameBoard[7]){
    return false
  } else if(!this.gameBoard[2] || this.gameBoard[2] != this.gameBoard[5] || this.gameBoard[5] != this.gameBoard[8]){
    return false
  }
  return true
 }
 
 checkForDiagWin() {
  if(!this.gameBoard[4]) {
    return false
  } else if(this.gameBoard[0] != this.gameBoard[4] || this.gameBoard[4] != this.gameBoard[8]) {
    return false
  } else if(this.gameBoard[2] != this.gameBoard[4] || this.gameBoard[4] != this.gameBoard[6]) {
    return false
  }
  return true
 }

}