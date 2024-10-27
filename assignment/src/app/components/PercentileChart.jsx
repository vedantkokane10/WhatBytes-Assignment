// components/PercentileChart.js
"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PercentileChart = () => {
  const data = {
    labels: Array.from({ length: 10 }, (_, i) => i * 10), // Example labels for percentiles
    datasets: [
      {
        label: 'Percentile',
        data: [5, 10, 25, 40, 50, 70, 60, 85, 90, 100], // Example data
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: true },
      y: { beginAtZero: true, max: 100 },
    },
  };

  return <Line data={data} options={options} />;
};

export default PercentileChart;
