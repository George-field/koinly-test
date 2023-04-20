import { isWinner, playerSymbol } from '../utils'
import { useState } from 'react';

export default function useGameState() {
  const [playerX, setPlayerX] = useState(true)
  // This code would be triggered if there was an api call
  // const [loading, setLoading] = useState(false)

  // initialise an array with the length of squares on the board
  const [boardState, setBoardState] = useState(new Array(9).fill(null))

  const handleclick = (position) => {
    if (isWinner(boardState)) return;

    boardState[position] = playerSymbol(playerX)
    setBoardState(boardState);
    setPlayerX(!playerX)

    // API Placeholder
    // If we were to connect to an api, here we have some logic to call said api and update the state ect
  }

  return {
    boardState,
    handleclick,
    playerX
  }
}