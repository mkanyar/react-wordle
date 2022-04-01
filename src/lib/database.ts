import axios from 'axios'

import {
  COUNTRY_ENDPOINT,
  GAMES_ENDPOINT,
  MISSING_WORDS_ENDPOINT,
} from '../constants/endpoints'
import { loadGameStateFromLocalStorage } from './localStorage'

type CompletedGamePayload = {
  // attempts_at: string[]
  country: string
  end_time: Date
  guesses: string[]
  // score: number
  solution: string
  start_time: Date
  // time_taken: number
  timezone: string
  won: boolean
}

export const saveGameStateToDatabase = (won: boolean) => {
  if (localStorage.getItem('saved')) return

  const game = loadGameStateFromLocalStorage()
  // const attemptsAt = (game && game.attemptsAt) || []
  // const startTime = new Date(attemptsAt[0])
  // const endTime = new Date(attemptsAt[attemptsAt.length - 1])
  const guesses = (game && game.guesses) || []
  // const timeTaken = (endTime.getTime() - startTime.getTime()) / 1000
  // const score = Math.round(100 - (guesses.length * timeTaken) / 100)
  // localStorage.setItem('gameScore', score.toString())

  const completedGame = {
    // attempts_at: attemptsAt,
    // end_time: endTime,
    end_time: new Date(),
    guesses,
    // score,
    solution: game && game.solution,
    // start_time: startTime,
    start_time: new Date(),
    // time_taken: timeTaken,
    won: won,
  } as CompletedGamePayload

  axios.get(COUNTRY_ENDPOINT).then(({ data: { country_name, timezone } }) => {
    localStorage.setItem('country', country_name)
    completedGame.country = country_name
    completedGame.timezone = timezone
    axios.post(GAMES_ENDPOINT, completedGame).then(() => {
      localStorage.setItem('saved', 'true')
    })
  })
}

export const saveCurrentGuessToDatabase = (currentGuess: string) => {
  axios.post(MISSING_WORDS_ENDPOINT, {
    word: { value: currentGuess.toLowerCase() },
  })
}
