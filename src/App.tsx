import {useEffect, useState} from 'react'
import {Keyboard} from './components/Keyboard'
import {RowComplete} from './components/RowComplete'
import {RowCurrent} from './components/RowCurrent'
import {RowEmpty} from './components/RowEmpty'
import {keys} from './constants'
import {useWindow} from './hooks/useWindow'
import {GameStatus} from './types'

import styles from './main.module.css'
import {Modal} from './components/Modal'
import {useFetch} from './hooks/useFetch'

function App() {
  const [wordOfTheDay, setWordOfTheDay] = useState('')
  const [currentWord, setCurrentWord] = useState('')
  const [turn, setTurn] = useState<number>(1)
  const [completedWords, setCompletedWords] = useState<string[]>([])
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing)

  const [toggleModal, setToggleModal] = useState<boolean>(false)

  const {data} = useFetch('https://random-word-api.herokuapp.com/all')

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
  }

  useEffect(() => {
    if (data.length > 0) {
      const wordSelected = data[getRandomInt(8000)]
      setWordOfTheDay(wordSelected.toUpperCase())
    }
  }, [])

  const handleKeyDown = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase()

    if (gameStatus !== GameStatus.Playing) {
      return
    }

    onKeyPressed(letter)
  }

  const onKeyPressed = (key: string) => {
    if (key === 'ENTER' && currentWord.length === 5 && turn <= 6) {
      onEnter()
    }

    if (key === 'BACKSPACE' && currentWord.length > 0) {
      onDelete()
    }

    if (currentWord.length >= 5) return

    if (keys.includes(key.toUpperCase())) {
      onInput(key)
    }
  }

  const onInput = (letter: string) => {
    setCurrentWord(old => old + letter)
  }

  const onDelete = () => {
    setCurrentWord(currentWord.slice(0, -1))
  }

  const onEnter = () => {
    if (currentWord === wordOfTheDay) {
      setCompletedWords(old => [...old, currentWord])
      setGameStatus(GameStatus.Won)
      setToggleModal(!toggleModal)
      return
    }

    if (turn === 6) {
      setCompletedWords(old => [...old, currentWord])
      setGameStatus(GameStatus.Lost)
      setToggleModal(!toggleModal)
      return
    }

    if (!data.includes(currentWord.toLocaleLowerCase())) {
      alert('The word does not exist')
      return
    } else {
      setCompletedWords(old => [...old, currentWord])
      setTurn(old => old + 1)
      setCurrentWord('')
    }
  }

  useWindow('keydown', handleKeyDown)

  const toogle = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <main className={styles.main}>
      <h1 style={{color: 'white', paddingBottom: '16px'}}>Wordle</h1>
      <div>
        {completedWords.map((word, i) => (
          <RowComplete key={i} word={word} solution={wordOfTheDay} />
        ))}

        {gameStatus === GameStatus.Playing ? (
          <RowCurrent word={currentWord} />
        ) : null}

        {Array.from(Array(6 - turn)).map((_, i) => (
          <RowEmpty key={i} />
        ))}
      </div>
      <Keyboard handleClick={onKeyPressed} />
      {toggleModal ? (
        <Modal
          gameStatus={gameStatus}
          played={completedWords.length}
          toggle={toogle}
        />
      ) : null}
    </main>
  )
}

export default App
