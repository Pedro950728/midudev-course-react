import { useState } from 'react'
import conffeti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { winnerCheck } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGameStorage, resetGameStorage } from './logic/storage'

const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(window.localStorage.getItem('board'))
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (gap) => {
    if (board[gap] || winner) return
    if (board[gap]) return
    const newBoard = [...board]
    newBoard[gap] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = winnerCheck(newBoard)
    if (newWinner) {
      conffeti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

    saveGameStorage({
      board: newBoard,
      turn: newTurn
    })
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Restart</button>
      <section className='game'>
        {board.map((_, gap) => {
          return (
            <Square key={gap} gap={gap} updateBoard={updateBoard}>
              {board[gap]}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
