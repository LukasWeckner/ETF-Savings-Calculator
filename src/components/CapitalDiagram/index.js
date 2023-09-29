import { Chart } from "react-google-charts";
import { data } from "../../utils/mockData";

function CapitalDiagram() {
  const options = {
    title: "Gesamtkapital im Laufe der Jahre",
    hAxis: { title: "Jahr", viewWindow: { min: 0, max: 5 } },
    vAxis: { title: "Gesamtkapital in €", viewWindow: { min: 0, max: 80000 } },
    legend: "none",
  };

  return (
    <section>
      <h2 className="Top-Margin">Platzhalter-Diagramm</h2>
      <Chart
        chartType="Line"
        data={data}
        options={options}
        width="80%"
        height="400px"
      />
    </section>
  );
}

export default CapitalDiagram;
