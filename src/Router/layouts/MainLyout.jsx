import { Outlet } from 'react-router-dom'
import Menu from '../Menu'

const MainLyout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLyout
