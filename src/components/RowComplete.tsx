import {Box} from './Box'
import styles from './Row.module.css'

interface Props {
  word: string
}
export const RowComplete = ({word}: Props) => {
  return (
    <div className={styles.row}>
      {Array.from(word).map((letter, i) => (
        <Box key={i} letter={letter} />
      ))}
    </div>
  )
}
