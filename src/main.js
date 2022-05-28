let currentGame = new Game()

let gameBoard = document.getElementById('grid-container')
let middleMessage = document.getElementById('middle-message')

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

  console.log('end')
}

function checkForWinOrDraw() {

  if(currentGame.checkForWinner()) {
    // update game and DOM for win
    console.log('win')
    middleMessage.innerText = `Player ${currentGame.turn} WINS!`
    currentGame.switchStartingPlayer()
    return
  } else if(currentGame.checkForDraw()) {
    // update game and DOM for draw
    console.log('draw')
    currentGame.switchStartingPlayer()
    middleMessage.innerText = 'Game ends in a DRAW!'
    return
  }

  currentGame.switchTurn()
}

function populateGameBoard() {
  let grid = ''
  let counter = 0
  currentGame.gameBoard.forEach(space => {
    if(space) {
      grid += `<div id="${counter}" class="grid-square">${space}</div>`
    } else {
      grid += `<div id="${counter}" class="grid-square"></div>`
    }
    counter ++
  })
  gameBoard.innerHTML = grid
}

