import React from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  return(
    <Doughnut
            data={chartData} 
            height={"200px"}
            options={{
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }}
            />
  )
}

export default PieChart;
