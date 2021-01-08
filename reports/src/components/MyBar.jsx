import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

function MyBar({ choice }) {
  const chartData = {
    labels: [''],
    datasets: [
      {
        label: 'Selection',
        backgroundColor: 'rgb(52, 159, 255)',
        borderColor: 'rgb(51, 159, 255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(52, 159, 255)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [choice],
      },
    ],
  };

  const chartOptions = {
    showScale: true,
    title: {
      display: false,
      text: 'Bar chart of selection',
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 8,
          },
        },
      ],
    },
  };

  return (
    <div style={{ width: '400px', margin: 'auto 20px' }}>
      <HorizontalBar
        data={chartData}
        width={300}
        height={80}
        options={chartOptions}
      />
    </div>
  );
}

export default MyBar;
