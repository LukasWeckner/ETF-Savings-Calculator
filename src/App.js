import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>ETF Sparplanrechner</h1>
      <h2>Deine Angaben</h2>
      <form>
        <label htmlFor="startkapital">Startkapital</label>
        <input id="startkapital" type="number" name="startkapital"></input>
        <label htmlFor="sparrate">Sparrate</label>
        <input id="sparrate" type="number" name="sparrate"></input>
        <label htmlFor="anlagedauer">Anlagedauer</label>
        <input id="anlagedauer" type="number" name="anlagedauer"></input>
        <label htmlFor="rendite">Jährliche Rendite</label>
        <input id="rendite" type="" name="rendite"></input>
      </form>
      <h3 className="Top-Margin">Platzhalter-Diagramm</h3>
      <img
        alt="Grafik der Kapitalentwicklung über die Jahre"
        src="./images/platzhalter.png"
      />
    </div>
  );
}

export default App;
