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
import { faker } from '@faker-js/faker'
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Death and Born Report',
        },
    },
};

const labels = ['2009', '2010', '2012', '2014', '2016', '2018', '2020'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Born',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 5000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Death',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 5000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Chart = () => {
    return (
      <>
         <div class="wrapper">
                <Sidebar />
                <div class="wrapper">
                    <div class="main">
                        <Nav />
                        <main class="content">
                            <div class="container-fluid p-0">


                            </div>
                        </main>
                    </div>
                </div>
            </div>
</>
                )
  }

                export default Chart;