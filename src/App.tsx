import ReactConfetti from 'react-confetti';
import './App.css'
import { Board } from './components/Board'
import useGameEngine from './Hooks/useGameEngine'
import { Refresh } from './Icons/Refresh';
// import { Square } from './components/Square'

function App() {

  const { squares, winner, isXTurn, onSquareClick, restart } = useGameEngine();

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='p-4 bg-white shadow-xl rounded-xl flex flex-col items-center g-8'>
          <h1 className='font-bold text-2xl text-center'>TIC-TAC-TOE</h1>
          <button className='p-2 flex items-center justify-center'><Refresh onClick={restart} /></button>
          <div className='mb-2'><Board squares={squares} onSquareClick={onSquareClick} winner={winner} /> </div>
          {winner && <h2>{squares[winner.a]} won</h2>}
        </div>
      </div>
    </>
  )
}

export default App
