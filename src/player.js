class Player {
  constructor(id, token, wins) {
    this.id = id,
    this.token = token,
    this.wins = wins || 0
  }

  addWin() {
    this.wins ++
  }
}

module.exports = Player