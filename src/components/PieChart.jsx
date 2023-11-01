import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)

const PieChart = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
 
  return (
    <div className="relative col-span-1 m-auto h-[50vh] w-full  rounded-lg border  p-4 lg:h-[70vh] lg:pt-20">
   <Doughnut
   data = {data}
   />
    

  
   </div>
  )
}

export default PieChart