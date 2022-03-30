import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { Link } from './Link'
import { WORDS } from '../../constants/wordlist'
import { VALID_GUESSES } from '../../constants/validGuesses'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Urukino rugenda uku :"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Tora ijambo ryinyegeje. Ushobora kugerageza incuro 6. Uko ukina,
          amabara y'indome araza guhinduka. Ayo mabara aza kukwereka ko uriko
          uregereza gutora ijambo ryinyegeje.
        </p>
      </div>

      <div>
        <p className="mt-4 font-bold text-sm text-gray-500 dark:text-gray-300">
          Akarorero :
        </p>
      </div>

      <div className="flex justify-center mb-1 mt-2">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="correct"
        />
        <Cell value="M" />
        <Cell value="U" />
        <Cell value="T" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Urudome <span className="font-bold">U</span> ruri mw'ijambo ryinyegeje
        kandi ruri mu kibanza carwo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="M" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="T" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Urudome <span className="font-bold">A</span> ruri mw'ijambo ryinyegeje
        ariko ntiruri mu kibanza carwo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="M" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="Z" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Urudome <span className="font-bold">Z</span> ntirurimwo mw'ijambo
        ryinyegeje.
      </p>

      <p className="mt-6 italic text-xs text-gray-500 dark:text-gray-300">
        Hari ikibazo wagize mu gukina ? Bimenyeshe mu gasandugu k'amakete kuri
        'Twitter' -{' '}
        <Link
          href="https://twitter.com/lionelkubwimana"
          className="underline font-bold"
          text="Fyonda hano"
        />
      </p>

      <p className="mt-6 italic text-xs text-gray-500 dark:text-gray-300">
        Muri runo rukino, harimwo amajambo{' '}
        <span className="font-bold">{WORDS.concat(VALID_GUESSES).length}</span>{' '}
        gusa.
      </p>

      <p className="mt-4 italic text-xs text-gray-500 dark:text-gray-300">
        <span className="font-bold">Ijambo</span> ryinyegeje ni rimwe umunsi
        wose. Rihinduka isaha 12 zo mw'ijoro.
      </p>
      <p className="mt-4 italic text-xs text-gray-500 dark:text-gray-300">
        Abafashije gutegura runo rukino bari{' '}
        <Link
          href="https://github.com/lionel-k/react-wordle#contributors"
          className="underline font-bold"
          text="hano"
        />
      </p>
      <p className="mt-4 italic text-xs text-gray-500 dark:text-gray-300">
        Code yamfashije gukora runo rukino{' '}
        <Link
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
          text="yirabe ngaha"
        />
      </p>
    </BaseModal>
  )
}
