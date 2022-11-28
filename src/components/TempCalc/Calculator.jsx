import { useState } from 'react'
import Boiling from './Boiling'
import TempInput from './TempInput'

const Calculator = () => {
  const [state, setState] = useState({ temp: '', scale: 'c' })

  function handleChangeCels(value) {
    setState({ temp: value, scale: 'c' })
  }
  function handleChangeFar(value) {
    setState({ temp: value, scale: 'f' })
  }
  const scale = state.scale
  const temp = state.temp
  const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp
  const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp
  return (
    <div>
      <TempInput value={celsius} onChange={handleChangeCels} scale="c" />
      <TempInput value={fahrenheit} onChange={handleChangeFar} scale="f" />
      <Boiling temp={parseFloat(celsius)} />
    </div>
  )
}

export default Calculator

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}
