import { useState, useEffect } from "react";
import "./App.css";
import CapitalDiagram from "./components/CapitalDiagram";
import FinancialDataForm from "./components/FinancialDataForm";
import UserResults from "./components/UserResults";

function App() {
  const [userInput, setUserInput] = useState({
    startkapital: "",
    sparrate: "",
    anlagedauer: "",
    rendite: "",
  });
  const [allInputsFilled, setAllInputsFilled] = useState(false);

  function checkAllInputsFilled() {
    return (
      userInput.startkapital !== "" &&
      userInput.sparrate !== "" &&
      userInput.anlagedauer !== "" &&
      userInput.rendite !== ""
    );
  }
  useEffect(() => {
    setAllInputsFilled(checkAllInputsFilled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  return (
    <div className="App">
      <h1>ETF Sparplanrechner</h1>
      <FinancialDataForm userInput={userInput} setUserInput={setUserInput} />
      {allInputsFilled ? (
        <UserResults userInput={userInput} />
      ) : (
        <p className="red-font">
          Fülle bitte alle Felder aus, um die Ergebnisse deiner Kapitalanlage zu
          sehen.
        </p>
      )}
      <CapitalDiagram />
    </div>
  );
}

export default App;
