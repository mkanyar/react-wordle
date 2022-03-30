import axios from 'axios'

import {
  COUNTRY_ENDPOINT,
  GAMES_ENDPOINT,
  MISSING_WORDS_ENDPOINT,
} from '../constants/endpoints'
import { loadGameStateFromLocalStorage } from './localStorage'

type CompletedGamePayload = {
  guesses: string[]
  solution: string
  won: boolean
  start_time: Date
  end_time: Date
  time_taken: number
  country: string
  timezone: string
}

export const saveGameStateToDatabase = (won: boolean) => {
  const game = loadGameStateFromLocalStorage()
  const endTime = new Date()
  const startTime = new Date(localStorage.getItem('startTime') as string)
  const completedGame = {
    guesses: game && game.guesses,
    solution: game && game.solution,
    won: won,
    start_time: startTime,
    end_time: endTime,
    time_taken: (endTime.getTime() - startTime.getTime()) / 1000,
  } as CompletedGamePayload

  if (!localStorage.getItem('saved')) {
    axios.get(COUNTRY_ENDPOINT).then(({ data: { country_name, timezone } }) => {
      completedGame.country = country_name
      completedGame.timezone = timezone
      axios.post(GAMES_ENDPOINT, completedGame).then(() => {
        localStorage.setItem('saved', 'true')
        localStorage.removeItem('startTime')
      })
    })
  }
}

export const saveCurrentGuessToDatabase = (currentGuess: string) => {
  axios.post(MISSING_WORDS_ENDPOINT, {
    word: { value: currentGuess.toLowerCase() },
  })
}
