import axios from 'axios'

import { MISSING_WORDS_ENDPOINT, GAMES_ENDPOINT } from '../constants/endpoints'
import { loadGameStateFromLocalStorage } from './localStorage'

type CompletedGame = {
  guesses: string[]
  solution: string
  isWin: boolean
  startTime: number
  endTime: number
  timeTakenInSeconds: number
}

export const saveGameStateToDatabase = (isWin: boolean) => {
  const game = loadGameStateFromLocalStorage()
  const endTime = new Date().getTime()
  const startTime = Date.parse(localStorage.getItem('startTime') as string)
  const completedGame = {
    guesses: game && game.guesses,
    solution: game && game.solution,
    isWin,
    startTime,
    endTime,
    timeTakenInSeconds: (endTime - startTime) / 1000,
  } as CompletedGame

  if (!localStorage.getItem('saved')) {
    axios
      .post(GAMES_ENDPOINT, {
        game: completedGame,
      })
      .then(() => {
        localStorage.setItem('saved', 'true')
        localStorage.removeItem('startTime')
      })
  }
}

export const saveCurrentGuessToDatabase = (currentGuess: string) => {
  axios.post(MISSING_WORDS_ENDPOINT, {
    word: { value: currentGuess.toLowerCase() },
  })
}
