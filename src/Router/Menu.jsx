import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="about">Go to About</NavLink>
      <NavLink to="contacts"> Go to Contacts</NavLink>
      <NavLink to="todoApp"> Go to Todo App</NavLink>
      <NavLink to="courses"> Courses</NavLink>
    </nav>
  )
}

export default Menu
