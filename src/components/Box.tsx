import {BoxStatus} from '../types'
import styles from './Box.module.css'

interface Props {
  letter: string
  status: BoxStatus
}

export const Box = ({letter, status}: Props) => {
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
  return <div className={`${styles.box} ${statusBox}`}>{letter}</div>
}
