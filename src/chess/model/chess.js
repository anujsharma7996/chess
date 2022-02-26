class Game {
  constructor(playerWhite) {
    this.playerWhite = playerWhite; //boolean
    this.chessBoard = this.makeStartingBoard();
  }

  makeStartingBoard() {
    // orientation for current player
    if (this.playerWhite) {
      // Player white orientation
    } else {
      // Player black orientation
    }
  }

  movePiece(pieceId, to) {
    // pieceId : string
    // to: [x,y]
  }
}
