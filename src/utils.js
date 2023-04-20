
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


export const isWinner = (boardState) => {
  // Check if the player has won
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      return boardState[a];
    }
  }
  return false;
}

export const playerSymbol = (isX) => isX ? 'X' : 'O'