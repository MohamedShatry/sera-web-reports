import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
export default function FullBar(props) {
  const chartData = {
    labels: [
      'Avoidance/Escape',
      'Distraction',
      'Emotional Support Seeking',
      'Experience the Emotion',
      'Problem Solving',
      'Reappraisal',
      'Rumination',
      'Somatic Relaxation',
    ],
    datasets: [
      {
        label: 'Selection',
        backgroundColor: 'rgb(52, 159, 255)',
        borderColor: 'rgb(51, 159, 255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(52, 159, 255)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [
          props.data.AV,
          props.data.DI,
          props.data.ES,
          props.data.EX,
          props.data.PS,
          props.data.RE,
          props.data.RU,
          props.data.SO,
        ],
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
    xLabel: 'Hello',
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 8,
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of times you said you would use each strategy',
          },
        },
      ],
    },
    animation: false,
    responsive: true,
    tooltipTemplate: '<%= value %>',
    tooltipFillColor: 'rgb(52, 159, 255)',
    tooltipFontColor: '#444',
    tooltipEvents: [],
    tooltipCaretSize: 0,
    onAnimationComplete: function () {
      this.showTooltip(this.datasets[0].bars, true);
    },
  };

  return (
    <div>
      <HorizontalBar data={chartData} options={chartOptions} />
    </div>
  );
}
