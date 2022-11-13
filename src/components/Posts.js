import { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
  const [state, setState] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setState(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  return error ? (
    <h1>Error: {error}</h1>
  ) : (
    <div className="posts">
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        state.map((item) => {
          return <Post key={item.id} {...item} />
        })
      )}
    </div>
  )
}

export default Posts
