import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Content from './components/Content'

function App() {
  const [state, setstate] = useState(0)
  function handleClick() {
    setstate(state + 1)
  }
  return (
    <div className="App">
      <Content total={state} />
      <Button onClick={handleClick} />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default App
