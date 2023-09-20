import { useState, useEffect } from "react";
import "./App.css";
import CapitalDiagram from "./components/CapitalDiagram";
import FinancialDataForm from "./components/FinancialDataForm";

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

  useEffect(() => {
    setAllInputsFilled(checkAllInputsFilled);
  }, [userInput]);

  return (
    <div className="App">
      <h1>ETF Sparplanrechner</h1>
      <FinancialDataForm userInput={userInput} setUserInput={setUserInput} />
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

      <CapitalDiagram />
    </div>
  );
}

export default App;
