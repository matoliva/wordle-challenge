import {RowComplete} from './components/RowComplete'
import {RowCurrent} from './components/RowCurrent'
import {RowEmpty} from './components/RowEmpty'

function App() {
  return (
    <div>
      <RowEmpty />
      <RowComplete word="hello" />
      <RowCurrent word="hel" />
    </div>
  )
}

export default App
