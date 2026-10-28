import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function DodajPage({ onDodaj }) {
  const tytulRef = useRef()
  const grupaRef = useRef()
  const punktyRef = useRef()
  const wyprzedanyRef = useRef()
  
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault() 

    const nowaWaluta = {
      tytul: tytulRef.current.value,
      grupa: grupaRef.current.value,
      punkty: parseInt(punktyRef.current.value) || 0,
      wyprzedany: wyprzedanyRef.current.checked
    }

    onDodaj(nowaWaluta)
    
    navigate('/')
  }

  return (
    <div className="max-width-600">
      <h2>Dodaj Walute</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tytuł Waluty:</label>
          <input type="text" ref={tytulRef} className="form-control" required />
        </div>
        
        <div className="mb-3">
          <label className="form-label">grupa:</label>
          <input ref={grupaRef} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">punkty:</label>
          <input type="number" ref={punktyRef} className="form-control" min="0" required />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" ref={wyprzedanyRef} className="form-check-input" id="wyprzedanyCheck" />
          <label className="form-check-input-label" htmlFor="wyprzedanyCheck">Produkt wyprzedany</label>
        </div>

        <button type="submit" className="btn btn-success">Zatwierdź wybór</button>
      </form>
    </div>
  )
}