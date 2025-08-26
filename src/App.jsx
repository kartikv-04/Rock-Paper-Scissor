import { useEffect, useState } from 'react'
import './index.css'
import paper from './assets/paper.png'
import scissor from './assets/scissor.png'
import rock from './assets/rock.png'

const choices = [rock, paper, scissor]

function App() {
  const [roundStarted, setRoundStarted] = useState(false)
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [result, setResult] = useState("")

  const handleUserChoice = (e) => {
    const choice = parseInt(e.target.value)
    setRoundStarted(true)
    setUserChoice(choice)

    const computer = Math.floor(Math.random() * 3)
    setComputerChoice(computer)
  }

  function handleFullReset() {
    setUserScore(0);
    setComputerScore(0);
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
    setPlay(false);
  }




  useEffect(() => {
    if (roundStarted && userChoice !== null && computerChoice !== null) {
      if (
        (userChoice === 0 && computerChoice === 1) ||
        (userChoice === 1 && computerChoice === 2) ||
        (userChoice === 2 && computerChoice === 0)
      ) {
        setComputerScore(prev => prev + 1)
        setResult("Computer Won")
      } else if (userChoice === computerChoice) {
        setResult("Draw")
      } else {
        setUserScore(prev => prev + 1)
        setResult("You Won")
      }
    }
  }, [roundStarted, userChoice, computerChoice])

  return (
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white font-semibold p-4'>
      <h1 className='text-4xl mb-4'>Rock Paper Scissors</h1>
      <div className='text-2xl mb-2'>{roundStarted ? result : "Make your move!"}</div>

      <div className='flex justify-between w-full max-w-5xl bg-white/10 p-4 rounded-2xl shadow-xl'>
        <div className='flex flex-col items-center w-1/3'>
          <div className='text-xl mb-2'>User</div>
          {userChoice !== null && <img src={choices[userChoice]} className='h-32 w-32' alt='User choice' />}
          <div className='mt-2'>Score: {userScore}</div>
        </div>

        <div className='flex flex-col items-center w-1/3'>
          <div className='text-xl mb-2'>Computer</div>
          {computerChoice !== null && <img src={choices[computerChoice]} className='h-32 w-32' alt='Computer choice' />}
          <div className='mt-2'>Score: {computerScore}</div>
        </div>
      </div>

      <div className='flex mt-8 gap-6'>
        <button value={0} onClick={handleUserChoice} className='h-14 w-28 bg-white text-blue-600 rounded-xl shadow-md hover:scale-105 transition'>Rock</button>
        <button value={1} onClick={handleUserChoice} className='h-14 w-28 bg-white text-blue-600 rounded-xl shadow-md hover:scale-105 transition'>Paper</button>
        <button value={2} onClick={handleUserChoice} className='h-14 w-28 bg-white text-blue-600 rounded-xl shadow-md hover:scale-105 transition'>Scissors</button>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button onClick={handleFullReset} className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600">
          Full Reset
        </button>
      </div>

    </div>
  )
}

export default App