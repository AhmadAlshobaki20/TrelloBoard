import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "./StackedBarChart.css";

import BoardContext from "../context/context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const { Lists } = useContext(BoardContext);
  // Extract the list titles and number of tasks
  const listOfTitles = Lists.map((list) => list.title);
  const taskCounts = Lists.map((list) => list.listOfTasks.length);
  const listsColor = Lists.map((list) => list.color);
  const data = {
    labels: listOfTitles,
    datasets: [
      {
        label: "Tasks",
        backgroundColor: listsColor,
        borderColor: listsColor,
        data: taskCounts,
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div className="chart">
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
