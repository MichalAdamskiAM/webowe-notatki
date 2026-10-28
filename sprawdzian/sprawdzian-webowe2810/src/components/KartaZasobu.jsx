import { Link } from 'react-router-dom'

export default function KartaZasobu({waluta}) {
  const klasaKarty = waluta.wyprzedany === false ? "card h-100 opacity-50" : "card h-100";

  return (
    <div className="col-md-4 mb-4">
      <div className={klasaKarty}>
        <div className="card-body">
          <h5 className="card-title">{waluta.tytul}</h5>
          <p className="card-text mb-1"><strong>grupa:</strong> {waluta.grupa}</p>
          <p className="card-text mb-3"><strong>punkty:</strong> {waluta.punkty}</p>
          
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className={`badge ${waluta.wyprzedany ? 'bg-danger' : 'bg-success'}`}>
              {waluta.wyprzedany ? 'Wyprzedany' : 'Dostępny'}
            </span>
            <button 
              className="btn btn-sm btn-outline-secondary"
              onClick={() => onPrzelaczFlage(waluta.numer)}
            >
              Zmień status
            </button>
          </div>

          <div className="d-flex gap-2 mt-3">
            <Link className="btn btn-sm btn-primary flex-grow-1" to={`/${waluta.numer}`}>
              Szczegóły
            </Link>
            <button 
              className="btn btn-sm btn-danger"
              onClick={() => onUsun(waluta.numer)}
            >
              Usuń
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}