import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
interface ContainerProps {data:{
  year:number;
  count:number
}[]}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Graphic: React.FC<ContainerProps> = ({data}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  
 const datachart = {
    labels:data.map((row) => row.year),
    datasets: [
      {
        label: 'Dataset 1',
        data: data.map((row) => row.count),
        borderColor: 'rgb(204, 255, 0)',
      }
    ],
  };


  return <Line options={options} data={datachart} />;
 
};

export default Graphic;
