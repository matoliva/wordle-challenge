import {Box} from './Box'
import styles from './Row.module.css'
import {BoxStatus} from '../types'

interface Props {
  word: string
  solution: string
}
export const RowComplete = ({word, solution}: Props) => {
  const checkLetter = (letter: string, pos: number): BoxStatus => {
    if (letter === solution[pos]) {
      return 'correct'
    } else if (solution.includes(letter)) {
      return 'present'
    } else {
      return 'absent'
    }
  }
  return (
    <div className={styles.row}>
      {Array.from(word).map((letter, i) => (
        <Box key={i} letter={letter} status={checkLetter(letter, i)} />
      ))}
    </div>
  )
}
