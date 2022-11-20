import styles from './todoForm.module.css'

function TodoForm({ onClick, inputState, changeState }) {
  function handleChange(event) {
    changeState(event.target.value)
  }
  return (
    <div>
      <form className={styles.form} onSubmit={onClick}>
        <input
          placeholder="Enter new Todo"
          className={styles.inp}
          value={inputState}
          onChange={handleChange}
        />
        <button id="submit" type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default TodoForm
