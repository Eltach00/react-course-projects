import Button from '../UI/Button'

function TodoActions({ reset, removeDone, styles, completedTodo }) {
  return (
    <div className={styles.actions}>
      <Button onClick={reset} children={'Reset'} title={'reset'} />

      <Button
        onClick={removeDone}
        children={'Remove Completed'}
        title={'Remove Completed'}
        disabled={!completedTodo}
      />
    </div>
  )
}

export default TodoActions
