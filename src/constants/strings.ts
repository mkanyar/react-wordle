export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = [
  'Ikibazo uragitoye 👍🏾 !',
  "Ubitoye nk'uwadubuye 👍🏾 !",
  'Neza cane 👍🏾 !',
  'Uri incambwenge 👍🏾 !',
  'Urarigemye 👍🏾 !',
]
export const GAME_COPIED_MESSAGE = 'Urukino rwakoporowe'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Indome ntizikwiye'
export const WORD_NOT_FOUND_MESSAGE = 'Iryo jambo ntiririmwo. Gerageza irindi.'
export const HARD_MODE_ALERT_MESSAGE =
  'Urukino rugoye ushobora kurujamwo ariho ugitangura gukina gusa!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Ijambo ryinyegeje ryari ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Utegerezwa gukoresha ${guess} mu kibanza ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Ijambo ritegerezwa kuba ririmwo urudome ${letter}`
export const ENTER_TEXT = 'KWEMEZA'
export const STATISTICS_TITLE = 'Aho ugejeje urukino'
export const GUESS_DISTRIBUTION_TEXT = 'Uko wagiye urabitora'
export const NEW_WORD_TEXT = 'Ijambo rishasha riza muri'
export const SHARE_TEXT = 'Sangiza abandi'
export const TOTAL_TRIES_TEXT = 'Incuro wagerageje'
export const SUCCESS_RATE_TEXT = 'Incuro wabitoye'
export const CURRENT_STREAK_TEXT = 'Iminsi umaze utsinda wikurikiranya'
export const BEST_STREAK_TEXT = 'Iminsi myinshi watsinze wikurikiranya'
export const HARD_MODE_DESCRIPTION =
  'Indome zose weretswe zitegerezwa gukoreshwa mu majambo akurikira'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Kugira bisomeke neza uri ku zuba'
