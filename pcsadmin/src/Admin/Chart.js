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
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div className="wrapper">
                    <div className="main">
                        <Nav />
                        <main className="content">
                            <div className="container-fluid p-0">

                                <div className="card-body py-3 ">
                                    <div className="chart chart-sm">
                                        <Line options={options} data={data} />
                                    </div>
                                    </div>
                                </div>
                        </main>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart;