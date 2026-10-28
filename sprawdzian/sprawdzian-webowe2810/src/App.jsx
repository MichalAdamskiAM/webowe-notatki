import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Link, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/dane.json')
    .then(

    )
    .error(
      
    )
  }, [])

  return (
    <>
    <Link to="/"></Link>
    <Link to="/dodaj"></Link>
    <Routes>
      <Route path='/' element={<Katalog />}></Route>
      <Route path='/dodaj' element={}></Route>
      <Route path='/:id' element={}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
    </>
  )
}

export default App
