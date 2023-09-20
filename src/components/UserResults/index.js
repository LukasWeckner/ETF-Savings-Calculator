function UserResults({ userInput }) {
  const { startkapital, sparrate, anlagedauer, rendite } = userInput;

  const dezimalRendite = rendite / 100;
  const summeMonatlicheSparrate = sparrate * (anlagedauer * 12);
  const summeInvestiertesKapital = startkapital + summeMonatlicheSparrate;
  const gesamtkapital =
    startkapital * Math.pow(1 + dezimalRendite / 12, 12 * anlagedauer) +
    sparrate *
      ((Math.pow(1 + dezimalRendite / 12, 12 * anlagedauer) - 1) /
        (dezimalRendite / 12));

  return (
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
  );
}

export default UserResults;
