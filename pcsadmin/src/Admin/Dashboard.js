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
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        getAllAdmin();
    }, []);

    const getAllAdmin = async () => {
        const { data } = await axios.get('http://localhost:5000/api/user/');
        console.log(data);
        // const resData = await data.json();
        setPatient(data);       
    }
    return (
        <>

            <div className="wrapper">
                <Sidebar />
                <div className="wrapper">
                    <div className="main">
                        <Nav />
                        <main className="content">
                            <div className="container-fluid p-0">

                                <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

                                <div className="row">
                                    <div className="col-xl-6 col-xxl-5 d-flex">
                                        <div className="w-100">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col mt-0">
                                                                    <h5 className="card-title">Patients</h5>
                                                                   
                                                                        {
                                                                          data.count
                                                                           
                                                                        } 
                                                                   
                                                                </div>

                                                                <div className="col-auto">
                                                                    <div className="stat text-primary">
                                                                        <LocalHotelOutlinedIcon className="align-middle" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h1 className="mt-1 mb-3">
                                                            </h1>
                                                            <div className="mb-0">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col mt-0">
                                                                    <h5 className="card-title">Visitors</h5>
                                                                </div>

                                                                <div className="col-auto">
                                                                    <div className="stat text-primary">
                                                                        <PersonAddAltOutlinedIcon className="align-middle" data-feather="users" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h1 className="mt-1 mb-3">14.212</h1>
                                                            <div className="mb-0">
                                                                <span className="text-success"> <i
                                                                    className="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                                                                <span className="text-muted">Since last week</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col mt-0">
                                                                    <h5 className="card-title">Earnings</h5>
                                                                </div>

                                                                <div className="col-auto">
                                                                    <div className="stat text-primary">
                                                                        <CurrencyExchangeOutlinedIcon className="align-middle" data-feather="dollar-sign" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h1 className="mt-1 mb-3">$21.300</h1>
                                                            <div className="mb-0">
                                                                <span className="text-success"> <i
                                                                    className="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
                                                                <span className="text-muted">Since last week</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col mt-0">
                                                                    <h5 className="card-title">Orders</h5>
                                                                </div>

                                                                <div className="col-auto">
                                                                    <div className="stat text-primary">
                                                                        <AddShoppingCartOutlinedIcon className="align-middle" data-feather="shopping-cart" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h1 className="mt-1 mb-3">64</h1>
                                                            <div className="mb-0">
                                                                <span className="text-danger"> <i
                                                                    className="mdi mdi-arrow-bottom-right"></i> -2.25% </span>
                                                                <span className="text-muted">Since last week</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-xxl-7">
                                        <div className="card flex-fill w-100">
                                            <div className="card-header">

                                                <h5 className="card-title mb-0">Recent Movement</h5>
                                            </div>
                                            <div className="card-body py-3">
                                                <div className="chart chart-sm">
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