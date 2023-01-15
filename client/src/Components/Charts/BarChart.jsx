import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

function BarChart({ chartData }) {
  return <Doughnut data={chartData} />;
}

export default BarChart;