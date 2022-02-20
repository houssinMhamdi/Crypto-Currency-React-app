import React from 'react'
import './Chart.css'
import { Bar } from 'react-chartjs-2';
import {coins} from './data'
import Chart  from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
export default function Charte({coin}) {
  

 const data = {
  labels: coins.map(x=> x.name),
  datasets: [{
    label: 'My First Dataset',
    data: coins.map(x => x.rank),
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

    return (
    <div className="chart">
            <Bar data={data}/>
    </div>
  )
}
