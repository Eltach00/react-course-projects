import styles from './todoList.module.css'

function TodoList({ listState, handleDelete }) {
  return (
    <div>
      {listState.length === 0 ? (
        <h2 className={styles.header2}>List is empty...</h2>
      ) : (
        ''
      )}
      <div className={styles.lists} id="list">
        {listState.map((item, index) => {
          return (
            <div
              className={styles.listElem}
              key={index}
              onClick={() => handleDelete(index)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
