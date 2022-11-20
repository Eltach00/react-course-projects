import Button from '../UI/Button'
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
        <Button children={'Submit'} type={'submit'} />
      </form>
    </div>
  )
}

export default TodoForm
