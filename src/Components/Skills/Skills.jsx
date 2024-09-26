import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './Skills.css';

Chart.register(ArcElement, Tooltip, Legend);

const skills = [
  { name: 'React', percentage: 50 },
  { name: 'JavaScript', percentage: 50 },
  { name: 'HTML5', percentage: 90},
  { name: 'CSS3', percentage: 80 },
  { name: 'Bootstrap', percentage: 70 },
  { name: 'Git', percentage: 25 },
];

 const Skills = () => {
  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Skills',
        data: skills.map(skill => skill.percentage),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 259, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 259, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div id="skills">
      <h2>Technical Skills</h2>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Skills;