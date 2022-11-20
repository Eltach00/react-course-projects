import styles from '../UI/button.module.css'

function Button(props) {
  const { disabled = false, children } = props
  return (
    <button {...props} className={styles.btn} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
