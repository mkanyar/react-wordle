import axios from 'axios'

import { MISSING_WORDS_ENDPOINT, GAMES_ENDPOINT } from '../constants/endpoints'
import { loadGameStateFromLocalStorage } from './localStorage'

type CompletedGamePayload = {
  guesses: string[]
  solution: string
  is_win: boolean
  start_time: Date
  end_time: Date
  time_taken: number
}

export const saveGameStateToDatabase = (isWin: boolean) => {
  const game = loadGameStateFromLocalStorage()
  const endTime = new Date()
  const startTime = new Date(localStorage.getItem('startTime') as string)
  const completedGame = {
    guesses: game && game.guesses,
    solution: game && game.solution,
    is_win: isWin,
    start_time: startTime,
    end_time: endTime,
    time_taken: (endTime.getTime() - startTime.getTime()) / 1000,
  } as CompletedGamePayload

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
