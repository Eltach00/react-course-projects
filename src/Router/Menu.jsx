import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      <NavLink to="todoApp">Todo App</NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink to="quoteMachine">Quote Machine</NavLink>
    </nav>
  )
}

export default Menu
