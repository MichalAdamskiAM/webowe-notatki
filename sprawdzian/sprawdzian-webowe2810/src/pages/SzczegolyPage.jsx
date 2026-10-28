import { useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Szczegoly({ lista }) {
  const { id } = useParams();
  
  const waluta = lista.find(w => w.numer == parseInt(id));

  if (!waluta) {
    return (
      <div className="alert alert-danger" role="alert">
        <h4>Nie ma takiej waluty...</h4>
        <p>Wybrany identyfikator zasobu nie istnieje w bazie danych.</p>
        <Link to="/" className="btn btn-outline-danger mt-2">Wróć do katalogu</Link>
      </div>
    );
  }

  return (
    <div className="card max-width-600 border-primary">
      <div className="card-header bg-primary text-white">
        <h3>Szczegóły pozycji (Numer: {waluta.numer})</h3>
      </div>
      <div className="card-body">
        <h4 className="card-title text-center mb-4">{waluta.tytul}</h4>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item"><strong>grupa:</strong> {waluta.grupa}</li>
          <li className="list-group-item"><strong>Punkty:</strong> {waluta.punkty}</li>
          <li className="list-group-item">
            <strong>Status dystrybucji: </strong> 
            <span className={`badge ${waluta.wyprzedany ? 'bg-danger' : 'bg-success'}`}>
              {waluta.wyprzedany ? 'Zakończona (Wyprzedany)' : 'Aktywna (Dostępny)'}
            </span>
          </li>
        </ul>
        <div className="text-center">
          <Link to="/" className="btn btn-secondary">Wróć do katalogu</Link>
        </div>
      </div>
    </div>
  )
}