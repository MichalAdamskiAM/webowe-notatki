import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Link, Route } from 'react-router-dom'

function App() {
  const [status, setStatus] = useState("ladowanie")
  const [lista, setLista] = useState([])

    useEffect(() => {
    fetch('/dane.json')
      .then(response => {
        if (!response.ok) throw new Error()
        return response.json()
      })
      .then(data => {
        setLista(data)
        setStatus("gotowe")
      })
      .catch(err => {
        console.error(err)
        setStatus("blad")
      });
  }, []);

  return (
    <>
    <Link to="/"></Link>
    <Link to="/dodaj"></Link>
    <Routes>
      <Route path='/' element={<Katalog lista={lista} />}></Route>
      <Route path='/dodaj' element={}></Route>
      <Route path='/:id' element={}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
    </>
  )
}

export default App
