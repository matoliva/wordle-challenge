import {BoxStatus} from '../types'
import styles from './Key.module.css'

interface Props {
  letter: string
  status: BoxStatus
  handleClick: () => void
  isSpecial?: boolean
}

export const Key = ({letter, status, handleClick, isSpecial}: Props) => {
  let statusBox = ''
  switch (status) {
    case 'correct':
      statusBox = styles.correct
      break
    case 'empty':
      statusBox = styles.empty
      break
    case 'absent':
      statusBox = styles.absent
      break
    case 'present':
      statusBox = styles.present
      break
    case 'edit':
      statusBox = styles.edit
      break
    default:
      break
  }

  const special = isSpecial ? styles.specialKey : ''

  return (
    <div
      onClick={handleClick}
      className={`${styles.key} ${statusBox} ${special}`}
    >
      {letter}
    </div>
  )
}
