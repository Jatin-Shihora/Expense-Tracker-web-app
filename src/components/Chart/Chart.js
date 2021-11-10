import React from "react";
import ChartBar from "./ChartBar";
import "./ChartBar.css";

const Chart = (props) => {
  //converts the object to a array of datapoint values
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  /*max needs a list of argument instead of an array
    so we can use spread operator(...)to pull out all the array elements to use them as standalone argumnets
    totalMaximum gets the max expense value from the 12 months
    */
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
