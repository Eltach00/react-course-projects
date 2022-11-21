import { Link } from 'react-router-dom'
import courses from '../data/courses'

const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      {courses.map((item) => {
        return (
          <Link key={item.id} to={item.slug}>
            {item.title}
          </Link>
        )
      })}
    </>
  )
}

export default Courses
