const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
}

const TempInput = (props) => {
  return (
    <fieldset className="m">
      <legend>Введите градусы по шкале {scaleNames[props.scale]}:</legend>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </fieldset>
  )
}

export default TempInput
