import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
const SingleCourse = () => {
  const navigate = useNavigate()
  const params = useParams()
  const course = courses.find((item) => item.slug === params.courseSlug)
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])
  return (
    <>
      <h1>{course.title}</h1>
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  )
}

export default SingleCourse
