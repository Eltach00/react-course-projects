import styles from './todoList.module.css'

function TodoList({ listState, handleDelete, done }) {
  return (
    <div>
      {!listState.length ? (
        <h2 className={styles.header2}>List is empty...</h2>
      ) : (
        ''
      )}
      <div className={styles.lists}>
        {listState.map((item) => {
          return (
            <div
              className={`${styles.listElem} ${item.isDone ? styles.done : ''}`}
              key={item.id}
            >
              {item.text}
              <span
                className={styles.icon}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </span>
              <span className={styles.icon} onClick={() => done(item.id)}>
                Done
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
