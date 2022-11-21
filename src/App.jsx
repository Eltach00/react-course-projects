import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Router/About'
import Contacts from './Router/Contacts'
import Home from './Router/Home'
import MainLyout from './Router/layouts/MainLyout'
import NotFound from './Router/NotFound'
import Todo from './TodoApp/Todo'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLyout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="todoApp" element={<Todo />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
