import KartaZasobu from "./KartaZasobu"
import { useState } from "react";

export default function Katalog({lista}){

    const [filter, setFilter] = useState("")

    const widoczne = lista.filter(waluta => {
        if (waluta.tytul.includes(filter.toLowerCase())) return true;
    });

    return (
        <>
            <label className="form-label">Nazwa</label>
            <input onChange={value => setFilter(value)} className="form-control" value={filter} />

            {widoczne.map(waluta =>
                <KartaZasobu key={waluta.numer} waluta={waluta} />
            )}
        </>
    )
}



//   return (
//     <div>
//       <h2>Liczba filmów: {lista.length}</h2>

//       <div className="row my-4">
//         <div className="col-md-4">
//           <label htmlFor="filtrKategoria" className="form-label">Filtruj po kategorii:</label>
//           <select 
//             id="filtrKategoria" 
//             className="form-select"
//             value={filtrKategoria}
//             onChange={(e) => setFiltrKategoria(e.target.value)}
//           >
//             <option value="Wszystkie">Wszystkie</option>
//             <option value="Akcja">Akcja</option>
//             <option value="Komedia">Komedia</option>
//             <option value="Dramat">Dramat</option>
//           </select>
//         </div>
//       </div>

//       <div className="row">
//         {widoczneFilmy.length > 0 ? (
//           widoczneFilmy.map(film => (
//             <KartaZasobu 
//               key={film.kod} 
//               film={film} 
//               onUsun={onUsun} 
//               onPrzelaczFlage={onPrzelaczFlage} 
//             />
//           ))
//         ) : (
//           <p className="text-muted">Brak filmów spełniających kryteria wyszukiwania.</p>
//         )}
//       </div>
//     </div>