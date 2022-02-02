import {Key} from './Key'

import styles from './Keyboard.module.css'

import {keys} from '../constants'

interface Props {
  handleClick: any
}

export const Keyboard = ({handleClick}: Props) => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardRow}>
        {Array.from(Array(10)).map((_, i) => (
          <Key
            key={keys[i]}
            letter={keys[i]}
            handleClick={() => handleClick(keys[i])}
            status={'empty'}
          />
        ))}
      </div>
      <div className={`${styles.keyboardRow} ${styles.keyboardMiddleRow}`}>
        {Array.from(Array(9)).map((_, i) => (
          <Key
            key={keys[i + 10]}
            letter={keys[i + 10]}
            handleClick={() => handleClick(keys[i + 10])}
            status={'empty'}
          />
        ))}
      </div>
      <div className={styles.keyboardRow}>
        <Key
          isSpecial={true}
          letter={'ENTER'}
          handleClick={() => handleClick('ENTER')}
          status={'empty'}
        />
        {Array.from(Array(7)).map((_, i) => (
          <Key
            key={keys[i + 19]}
            letter={keys[i + 19]}
            handleClick={() => handleClick(keys[i + 19])}
            status={'empty'}
          />
        ))}
        <Key
          isSpecial={true}
          letter={'DELETE'}
          handleClick={() => handleClick('BACKSPACE')}
          status={'empty'}
        />
      </div>
    </div>
  )
}
