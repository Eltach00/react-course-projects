import { useState } from 'react'
import randomNum from './utils/randomNum'

export default function RandomNumComp(props) {
  const [state, setstate] = useState(randomNum(props.maxNum))
  function handleClick() {
    setstate(randomNum(props.maxNum))
  }
  return (
    <div>
      <h1>Random Number {state} </h1>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </div>
  )
}
