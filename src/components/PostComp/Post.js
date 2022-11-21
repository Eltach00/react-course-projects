function Post({ title, body, styles }) {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Post
