import { useState } from "react";
import "./App.css";

function App() {
  const [startkapital, setStartkapital] = useState("");
  const [sparrate, setSparrate] = useState("");
  const [anlagedauer, setAnlagedauer] = useState("");
  const [rendite, setRendite] = useState("");

  const [allInputsFilled, setAllInputsFilled] = useState(false);

  function checkAllInputsFilled() {
    return (
      startkapital !== "" &&
      sparrate !== "" &&
      anlagedauer !== "" &&
      rendite !== ""
    );
  }

  const dezimalRendite = rendite / 100;
  const summeMonatlicheSparrate = sparrate * (anlagedauer * 12);
  const summeInvestiertesKapital = startkapital + summeMonatlicheSparrate;
  const gesamtkapital =
    startkapital * Math.pow(1 + dezimalRendite / 12, 12 * anlagedauer) +
    sparrate *
      ((Math.pow(1 + dezimalRendite / 12, 12 * anlagedauer) - 1) /
        (dezimalRendite / 12));

  function handleChangeStartkapital(event) {
    const value = event.target.value;
    setStartkapital(value === "" ? "" : parseFloat(value));
    setAllInputsFilled(checkAllInputsFilled());
  }
  function handleChangeSparrate(event) {
    const value = event.target.value;
    setSparrate(value === "" ? "" : parseFloat(value));
    setAllInputsFilled(checkAllInputsFilled());
  }
  function handleChangeAnlagedauer(event) {
    const value = event.target.value;
    setAnlagedauer(value === "" ? "" : parseFloat(value));
    setAllInputsFilled(checkAllInputsFilled());
  }
  function handleChangeRendite(event) {
    const value = event.target.value;
    setRendite(value === "" ? "" : parseFloat(value));
    setAllInputsFilled(checkAllInputsFilled());
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

      {allInputsFilled ? (
        <section>
          <h2>Deine Ergebnisse:</h2>
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
      ) : null}

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
