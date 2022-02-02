import {GameStatus} from '../types'
import styles from './Modal.module.css'

interface Props {
  gameStatus: GameStatus
  played: number
  toggle: () => void
}
export const Modal = ({gameStatus, played, toggle}: Props) => {
  const status = gameStatus === 2 ? 'you lost' : 'you win'
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <button onClick={toggle} className={styles.btn}>
          X
        </button>
        <h1>Statistics</h1>
        <div className={styles.container}>
          <div>{status}</div>
          <div>{`you tried ${played}`}</div>
        </div>
        <h2>Next wordle in 24 hs</h2>
      </div>
    </div>
  )
}
