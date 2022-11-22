import { Link, useLocation, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['id', 'slug', 'title']

function sortCourse(courses, key) {
  if (!key || !SORT_KEYS.includes(key)) {
    return courses
  }
  return [...courses].sort((a, b) => (a[key] > b[key] ? 1 : -1))
}

const Courses = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const parse = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(parse.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourse(courses, sortKey)
  )
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [navigate, sortKey])
  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((item) => {
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
