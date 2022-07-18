import React from "react"; // <-- Importo React
import ChartBar from "./ChartBar"; // <-- Importo il componente ChartBar
import "./Chart.css"; // <-- Import CSS

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximun = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximun}
                    label={dataPoint.label}
                />
            )}
        </div>
    )

};

export default Chart;