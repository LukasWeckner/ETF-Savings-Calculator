function FinancialDataForm({ userInput, setUserInput }) {
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

  return (
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
    </section>
  );
}

export default FinancialDataForm;
