import {Box} from './Box'
import styles from './Row.module.css'

export const RowEmpty = () => {
  return (
    <div className={styles.row}>
      {Array.from({length: 5}).map((_, i) => (
        <Box key={i} letter="" />
      ))}
    </div>
  )
}
