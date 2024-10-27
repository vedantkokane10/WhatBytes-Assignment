"use client";

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const DonutChart = () => {
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [12, 3], 
        backgroundColor: ['#4388F5', '#EDF3FE'],
        hoverBackgroundColor: ['#45A049', '#E53935'],
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
    },
  };

  return <Doughnut data={data} options={options} width={200} height={200}  />;
};

export default DonutChart;
