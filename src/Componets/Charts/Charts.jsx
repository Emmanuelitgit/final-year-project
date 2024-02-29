import React, { useState } from "react";
import PieChart from "./Piechart";
import BarChart from "./Barchart";
import LineChart from "./Linechart";
import { UserData } from "../../../src/utils/Data";
import "./style.css";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "red",
          "yellow",
          "blue",
          "teal",
          "orange",
          "#F02EBA",
          "#B01AAA"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="charts-container">
      <div style={{ width: 220}} className="piechart-container">
        <PieChart chartData={userData} />
      </div>
      <div style={{ width:600, }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 600, margin:'20px' }}>
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
