import axios from 'axios'
import dayjs from 'dayjs'

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
  start_time: string
  end_time: string
  time_taken: number
  country: string
}
const customParseFormat = require('dayjs/plugin/customParseFormat')

export const saveGameStateToDatabase = (won: boolean) => {
  const game = loadGameStateFromLocalStorage()
  // const endTime = new Date()
  const endTime = dayjs() //.format('YYYY-MM-DDTHH:mm:ssZ[Z]')
  // const startTime = new Date(localStorage.getItem('startTime') as string)
  // const startTime = dayjs(localStorage.getItem('startTime') as string)
  // const startTime = dayjs(
  //   localStorage.getItem('startTime') as string,
  //   ['YYYY-MM-DDTHH:mm:ssZ[Z]'],
  //   true
  // )
  dayjs.extend(customParseFormat)
  console.log(localStorage.getItem('startTime') as string)
  // 2022-03-30T15:19:30+02:00Z
  // const startTime = dayjs('2018-04-04T16:00:00.000Z')
  const startTime = dayjs(
    localStorage.getItem('startTime') as string,
    'YYYY-MM-DDTHH:mm:ssZ[Z]'
  )
  const completedGame = {
    guesses: game && game.guesses,
    solution: game && game.solution,
    won: won,
    start_time: startTime.format('YYYY-MM-DDTHH:mm:ssZ[Z]'),
    end_time: endTime.format('YYYY-MM-DDTHH:mm:ssZ[Z]'),
    // time_taken: Math.round((endTime.getTime() - startTime.getTime()) / 1000),
    time_taken: endTime.diff(startTime, 'second'),
  } as CompletedGamePayload

  // if (!localStorage.getItem('saved')) {
  axios.get(COUNTRY_ENDPOINT).then((res) => {
    completedGame.country = res.data.country_name
    axios.post(GAMES_ENDPOINT, completedGame).then(() => {
      localStorage.setItem('saved', 'true')
      localStorage.removeItem('startTime')
    })
  })
  // }
}

export const saveCurrentGuessToDatabase = (currentGuess: string) => {
  axios.post(MISSING_WORDS_ENDPOINT, {
    word: { value: currentGuess.toLowerCase() },
  })
}
