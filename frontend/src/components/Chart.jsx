import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function DisplayChart({ data, analysisType }) {
  if (!Array.isArray(data) || data.length === 0) {
    console.log("Chart error: data is not an array", data);
    return <p>No data available for your selected waterbody.</p>;
  }

  
  let minColumn = "";
  let maxColumn = "";

  switch (analysisType) {
    case "Temperature":
      minColumn = "Temperature ?C (Min)";
      maxColumn = "Temperature ?C (Max)";
      break;
    case "Dissolved Oxygen":
      minColumn = "Dissolved Oxygen (mg/L) (Min)";
      maxColumn = "Dissolved Oxygen (mg/L) (Max)";
      break;
    case "pH":
      minColumn = "pH (Min)";
      maxColumn = "pH (Max)";
      break;
    case "Conductivity":
      minColumn = "Conductivity (?mhos/cm) (Min)";
      maxColumn = "Conductivity (?mhos/cm) (Max)";
      break;
    case "BOD":
      minColumn = "BOD (mg/L) (Min)";
      maxColumn = "BOD (mg/L) (Max)";
      break;
    case "Nitrate N + Nitrite N":
      minColumn = "Nitrate N + Nitrite N(mg/L) (Min)";
      maxColumn = "Nitrate N + Nitrite N(mg/L) (Max)";
      break;
    case "Fecal Coliform":
      minColumn = "Fecal Coliform (MPN/100ml) (Min)";
      maxColumn = "Fecal Coliform (MPN/100ml) (Max)";
      break;
    case "Total Coliform":
      minColumn = "Total Coliform (MPN/100ml) (Min)";
      maxColumn = "Total Coliform (MPN/100ml) (Max)";
      break;
    default:
      return <p>Analysis type is not supported.</p>;
  }

  const chartData = data.map((item) => ({
    name: item["Name of Monitoring Location"],
    min: Number(item[minColumn]) || 0,
    max: Number(item[maxColumn]) || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="min" stackId="a" fill="#8884d8" name="Min Value" />
        <Bar dataKey="max" stackId="a" fill="#82ca9d" name="Max Value" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DisplayChart;