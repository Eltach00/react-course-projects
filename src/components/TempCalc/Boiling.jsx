const Boiling = (props) => {
  return props.temp >= 100 ? <p>Вода вскипит</p> : <p>Вода не вскипит</p>
}

export default Boiling
