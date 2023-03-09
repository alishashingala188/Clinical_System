import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import './css/app.css'
import Footer from './Footer'
import Nav from './Nav'
import axios from 'axios'
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
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



const Dashboard = () => {
    const [patient, setPatient] = useState("");
    useEffect(() => {
        getAllAdmin();
    }, []);

    const getAllAdmin = async () => {
        const { data } = await axios.get('http://localhost:5000/api/user/');
        console.log(data);
        // const resData = await data.json();
        setPatient(data.count)
    }
    return (
        <>

            <div class="wrapper">
                <Sidebar />
                <div class="wrapper">
                    <div class="main">
                        <Nav />
                        <main class="content">
                            <div class="container-fluid p-0">

                                <h1 class="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

                                <div class="row">
                                    <div class="col-xl-6 col-xxl-5 d-flex">
                                        <div class="w-100">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col mt-0">
                                                                    <h5 class="card-title">Patients</h5>
                                                                </div>
                                                                {
                                                                    // patient.map(p => {
                                                                    //     return <h3>{p.name}</h3>
                                                                    // })
                                                                        
                                                                }
                                                               <div class="col-auto">
                                                                <div class="stat text-primary">
                                                                    <LocalHotelOutlinedIcon class="align-middle" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 class="mt-1 mb-3">
                                                        </h1>
                                                        <div class="mb-0">

                                                        </div>
                                                    </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col mt-0">
                                                                        <h5 class="card-title">Visitors</h5>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="stat text-primary">
                                                                            <PersonAddAltOutlinedIcon class="align-middle" data-feather="users" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h1 class="mt-1 mb-3">14.212</h1>
                                                                <div class="mb-0">
                                                                    <span class="text-success"> <i
                                                                        class="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                                                                    <span class="text-muted">Since last week</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col mt-0">
                                                                        <h5 class="card-title">Earnings</h5>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="stat text-primary">
                                                                            <CurrencyExchangeOutlinedIcon class="align-middle" data-feather="dollar-sign" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h1 class="mt-1 mb-3">$21.300</h1>
                                                                <div class="mb-0">
                                                                    <span class="text-success"> <i
                                                                        class="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
                                                                    <span class="text-muted">Since last week</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col mt-0">
                                                                        <h5 class="card-title">Orders</h5>
                                                                    </div>

                                                                    <div class="col-auto">
                                                                        <div class="stat text-primary">
                                                                            <AddShoppingCartOutlinedIcon class="align-middle" data-feather="shopping-cart" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h1 class="mt-1 mb-3">64</h1>
                                                                <div class="mb-0">
                                                                    <span class="text-danger"> <i
                                                                        class="mdi mdi-arrow-bottom-right"></i> -2.25% </span>
                                                                    <span class="text-muted">Since last week</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-6 col-xxl-7">
                                            <div class="card flex-fill w-100">
                                                <div class="card-header">

                                                    <h5 class="card-title mb-0">Recent Movement</h5>
                                                </div>
                                                <div class="card-body py-3">
                                                    <div class="chart chart-sm">
                                                        <Line options={options} data={data} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard