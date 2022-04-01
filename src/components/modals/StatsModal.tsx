import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { RankingBar, RankingStats } from '../stats/RankingBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { solution, tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  CORRECT_WORD_MESSAGE,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }

  const country = localStorage.getItem('country') || 'France'
  if (!country) {
    // get the country through COUNTRY_ENDPOINT endpoints
    // and store it in localStorage
  }
  const gameScore = localStorage.getItem('gameScore')
  if (!gameScore) {
    // return
  }

  const rankingStats = {
    nationalRank: '2/123',
    internationalRank: '34/567',
    averageNationalScore: 34,
    averageInternationalScore: 23,
    country,
  } as RankingStats

  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        gameStats={gameStats}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {isGameWon && (
        <>
          <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
            Ihiganwa mpuzamakungu
          </h4>
          <p className="text-m font-bold leading-5 text-gray-500 dark:text-gray-400">
            Amanota yawe: {gameScore}
          </p>
          <RankingBar rankingStats={rankingStats} />
        </>
      )}
      {isGameLost && (
        <p className="text-sm mt-4 leading-6 font-medium text-gray-900 dark:text-gray-100">
          {CORRECT_WORD_MESSAGE(solution)}
        </p>
      )}
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
