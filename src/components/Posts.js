import { useEffect, useState } from 'react'
import Post from './Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
  const [state, setState] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async function () {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        setState(data)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    })()
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
