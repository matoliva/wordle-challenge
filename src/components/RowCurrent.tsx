import {Box} from './Box'
import styles from './Row.module.css'

interface Props {
  word: string
}

export const RowCurrent = ({word}: Props) => {
  return (
    <div className={styles.row}>
      {word.split('').map((letter, i) => (
        <Box key={i} letter={letter} status="edit" />
      ))}
      {Array.from(Array(5 - word.length)).map((_, i) => (
        <Box key={i} letter="" status="empty" />
      ))}
    </div>
  )
}
