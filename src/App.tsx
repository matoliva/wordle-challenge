import {useState} from 'react'
import {RowComplete} from './components/RowComplete'
import {RowCurrent} from './components/RowCurrent'
import {RowEmpty} from './components/RowEmpty'
import {keys} from './constants'
import {useWindow} from './hooks/useWindow'

function App() {
  const [wordOfTheDay, setWordOfTheDay] = useState('magic')
  const [currentWord, setCurrentWord] = useState('')

  const handleKeyDown = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase()

    onKeyPressed(letter)
  }

  const onKeyPressed = (key: string) => {
    if (currentWord.length >= 5) return

    //TODO: check if key is a letter 'enter'

    //TODO: check if key is a letter 'backspace'

    if (keys.includes(key.toUpperCase())) {
      onInput(key)
    }
  }

  const onInput = (letter: string) => {
    setCurrentWord(old => old + letter)
  }

  useWindow('keydown', handleKeyDown)

  return (
    <div>
      <RowEmpty />
      <RowComplete word="hello" />
      <RowCurrent word={currentWord} />
    </div>
  )
}

export default App
