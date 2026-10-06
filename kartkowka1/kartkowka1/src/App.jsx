import React, { useState } from "react";
import waluty from "./waluty";
import Pozycja from "./Pozycja";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  const [imieNazwisko, setImieNazwisko] = useState("");
  const [numerWaluty, setNumerWaluty] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Imię i nazwisko:", imieNazwisko);

    const index = Number(numerWaluty) - 1;
    if (index >= 0 && index < waluty.length && waluty[index] !== undefined) {
      console.log("Wybrana waluta:", waluty[index]);
    } else {
      console.log("Nieprawidłowy numer waluty");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Liczba walut: {waluty.length}</h2>

      <ol>
        {waluty.map((pozycja, index) => (
          <Pozycja key={index} nazwa={pozycja} />
        ))}
      </ol>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Imię i nazwisko:
          </label>
          <input
            className="form-control"
            type="text"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Numer waluty:
          </label>
          <input
            className="form-control"
            type="number"
            value={numerWaluty}
            onChange={(e) => setNumerWaluty(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">Zatwierdź wybór</button>
      </form>
    </div>
  );
}