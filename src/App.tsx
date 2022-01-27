import {useEffect, useState} from 'react'
import {RowComplete} from './components/RowComplete'
import {RowCurrent} from './components/RowCurrent'
import {RowEmpty} from './components/RowEmpty'
import {keys} from './constants'
import {useWindow} from './hooks/useWindow'
import {GameStatus} from './types'

function App() {
  const [wordOfTheDay, setWordOfTheDay] = useState('')
  const [currentWord, setCurrentWord] = useState('')
  const [turn, setTurn] = useState<number>(1)
  const [completedWords, setCompletedWords] = useState<string[]>([])
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing)

  useEffect(() => {
    setWordOfTheDay('magic')
  })

  const handleKeyDown = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase()

    onKeyPressed(letter)
  }

  const onKeyPressed = (key: string) => {
    if (key === 'ENTER' && currentWord.length === 5) {
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
      return
    }

    if (turn === 6) {
      setCompletedWords(old => [...old, currentWord])
      setGameStatus(GameStatus.Lost)
      return
    }

    //TODO: check if word exists in dictionary

    setCompletedWords(old => [...old, currentWord])
    setTurn(old => old + 1)
    setCurrentWord('')
  }

  useWindow('keydown', handleKeyDown)

  return (
    <div>
      <RowCurrent word={currentWord} />
      <RowEmpty />
      <RowEmpty />
      <RowEmpty />
      <RowEmpty />
      <RowEmpty />
      {/* <RowComplete word="amzic" solution={wordOfTheDay} /> */}
    </div>
  )
}

export default App
