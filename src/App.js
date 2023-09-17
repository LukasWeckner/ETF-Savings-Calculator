import { useState } from "react";
import "./App.css";

function App() {
  const [startkapital, setStartkapital] = useState(0);
  const [sparrate, setSparrate] = useState(0);
  const [anlagedauer, setAnlagedauer] = useState(0);
  const [rendite, setRendite] = useState(0);

  const dezimalRendite = rendite / 100;
  const summeMonatlicheSparrate = sparrate * (anlagedauer * 12);
  const summeInvestiertesKapital = startkapital + summeMonatlicheSparrate;
  const gesamtkapital =
    startkapital * Math.pow(1 + dezimalRendite / 12, 12 * anlagedauer) +
    sparrate *
      ((Math.pow(1 + dezimalRendite / 12, 12 * anlagedauer) - 1) /
        (dezimalRendite / 12));

  function handleChangeStartkapital(event) {
    setStartkapital(parseFloat(event.target.value));
  }
  function handleChangeSparrate(event) {
    setSparrate(parseFloat(event.target.value));
  }
  function handleChangeAnlagedauer(event) {
    setAnlagedauer(parseFloat(event.target.value));
  }
  function handleChangeRendite(event) {
    setRendite(parseFloat(event.target.value));
  }

  return (
    <div className="App">
      <h1>ETF Sparplanrechner</h1>
      <section>
        <h2>Deine Angaben</h2>
        <form>
          <label htmlFor="startkapital">Startkapital</label>
          <input
            id="startkapital"
            type="number"
            name="startkapital"
            onChange={handleChangeStartkapital}
          ></input>
          <label htmlFor="sparrate">Sparrate</label>
          <input
            id="sparrate"
            type="number"
            name="sparrate"
            onChange={handleChangeSparrate}
          ></input>
          <label htmlFor="anlagedauer">Anlagedauer</label>
          <input
            id="anlagedauer"
            type="number"
            name="anlagedauer"
            onChange={handleChangeAnlagedauer}
          ></input>
          <label htmlFor="rendite">Jährliche Rendite</label>
          <input
            id="rendite"
            type="number"
            name="rendite"
            onChange={handleChangeRendite}
          ></input>
        </form>
        <h3 className="Top-Margin">Platzhalter-Diagramm</h3>
      </section>

      <section>
        <h2>Deine Ergebnisee:</h2>
        <ul>
          <li>{`Startkapital: ${startkapital}€`}</li>
          <li>{`Summe monatliche Sparrate: ${summeMonatlicheSparrate}€`}</li>
          <li>{`Summe investiertes Kapital: ${summeInvestiertesKapital}€`}</li>
          <li>{`Summe Rendite: ${(
            gesamtkapital - summeInvestiertesKapital
          ).toFixed(2)}€`}</li>
          <li>{`Gesamtkapital: ${gesamtkapital.toFixed(2)}€`}</li>
        </ul>
      </section>
      <section>
        <img
          alt="Grafik der Kapitalentwicklung über die Jahre"
          src="./images/platzhalter.png"
        />
      </section>
    </div>
  );
}

export default App;
