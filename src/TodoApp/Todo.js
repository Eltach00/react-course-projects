import { useState } from 'react'
import styles from './todo.module.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
  const [list, setList] = useState('')
  const [state, setState] = useState([])
  function handleClick(event) {
    event.preventDefault()

    list && setState([...state, list])
    setList('')
  }
  function changeState(value) {
    setList(value)
  }

  function handleDelete(key) {
    const newArr = [...state].filter((item, index) => index !== key)
    setState([...newArr])
  }
  return (
    <div>
      <h1 className={styles.header}>Todo App</h1>
      <TodoForm
        onClick={handleClick}
        inputState={list}
        changeState={changeState}
      />
      <TodoList listState={state} handleDelete={handleDelete} />
    </div>
  )
}

export default Todo
