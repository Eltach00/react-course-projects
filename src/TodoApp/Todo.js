import { useState } from 'react'
import styles from './todo.module.css'
import TodoActions from './TodoActions'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
  const [inputState, setInputState] = useState('')
  const [listState, setListState] = useState([])
  function handleClick(event) {
    event.preventDefault()
    const newToDo = {
      id: Math.random(),
      text: inputState,
      isDone: false,
    }
    inputState && setListState([...listState, newToDo])
    setInputState('')
  }
  function changeState(value) {
    setInputState(value)
  }

  function handleDelete(key) {
    setListState(listState.filter((item) => item.id !== key))
  }

  function handleDone(key) {
    setListState(
      listState.map((item) =>
        item.id === key ? { ...item, isDone: !item.isDone } : { ...item }
      )
    )
  }

  function handleReset() {
    setListState([])
  }

  function handleRemoveDone() {
    setListState(listState.filter((item) => !item.isDone))
  }

  let completedTodo = listState.reduce(
    (sum, item) => (item.isDone ? sum + 1 : sum),
    0
  )

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Todo App</h1>
      <TodoForm
        onClick={handleClick}
        inputState={inputState}
        changeState={changeState}
      />
      {!!listState.length && (
        <TodoActions
          completedTodo={!!completedTodo}
          styles={styles}
          reset={handleReset}
          removeDone={handleRemoveDone}
        />
      )}
      <TodoList
        listState={listState}
        handleDelete={handleDelete}
        done={handleDone}
      />
      {!!completedTodo && (
        <h2 className={styles.header}>
          {` You have completed ${completedTodo} ${
            completedTodo > 1 ? 'todos' : 'todo'
          }`}
        </h2>
      )}
    </div>
  )
}

export default Todo
