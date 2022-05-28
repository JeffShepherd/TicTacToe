let currentGame = new Game()

let gameBoard = document.getElementById('grid-container')
let middleMessage = document.getElementById('middle-message')
let playerOneWins = document.getElementById('player-one-wins')
let playerTwoWins= document.getElementById('player-two-wins')

gameBoard.addEventListener('click', function(event) {
  processGameBoardClick(event.target.id)
})

function processGameBoardClick(id) {
  if(id === 'grid-container') {return}
  if(!currentGame.takeTurn(id)) {
    return
  } else {
    populateGameBoard()
  }
  checkForWinOrDraw()
}

function checkForWinOrDraw() {
  if(currentGame.checkForWinner()) {
    middleMessage.innerText = `Player ${currentGame.turn} WINS!`
    updateWinCount()
    setTimeout(startNewGame, 5000)
    return
  } else if(currentGame.checkForDraw()) {
    middleMessage.innerText = 'Game ends in a DRAW!'
    setTimeout(startNewGame, 5000)
    return
  }
  currentGame.switchTurn()
  middleMessage.innerText = `Player ${currentGame.turn}'s turn`
}

function startNewGame() {
  currentGame.switchStartingPlayer()
  currentGame.resetGameBoard()
  populateGameBoard()
  middleMessage.innerText = `New game! Player ${currentGame.turn}'s turn`
}

function updateWinCount() {
  playerOneWins.innerText = `${currentGame.playerOne.wins} wins`
  playerTwoWins.innerText = `${currentGame.playerTwo.wins} wins`
}

function populateGameBoard() {
  let grid = ''
  let counter = 0
  currentGame.gameBoard.forEach(space => {
    if(space) {
      grid += `<div id="${counter}" class="grid-square center-text">${space}</div>`
    } else {
      grid += `<div id="${counter}" class="grid-square center-text"></div>`
    }
    counter ++
  })
  gameBoard.innerHTML = grid
}