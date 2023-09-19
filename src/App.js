import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState({
    startkapital: "",
    sparrate: "",
    anlagedauer: "",
    rendite: "",
  });
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  const { startkapital, sparrate, anlagedauer, rendite } = userInput;

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
    setUserInput({
      ...userInput,
      startkapital: value === "" ? "" : parseFloat(value),
    });
  }
  function handleChangeSparrate(event) {
    const value = event.target.value;
    setUserInput({
      ...userInput,
      sparrate: value === "" ? "" : parseFloat(value),
    });
  }
  function handleChangeAnlagedauer(event) {
    const value = event.target.value;
    setUserInput({
      ...userInput,
      anlagedauer: value === "" ? "" : parseFloat(value),
    });
  }
  function handleChangeRendite(event) {
    const value = event.target.value;
    setUserInput({
      ...userInput,
      rendite: value === "" ? "" : parseFloat(value),
    });
  }

  useEffect(() => {
    setAllInputsFilled(checkAllInputsFilled);
  }, [userInput]);

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
