import React from 'react'
// import AddDoctor from './AddDoctor'
import { Link } from 'react-router-dom'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import User from '../images/user.png'
import RateReviewIcon from '@mui/icons-material/RateReview';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
const Dsidebar = () => {
    return (
        <>
            <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" href="index1.php">
                        <span class="align-middle">Doctor dashboard </span>
                    </a>
                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
                        </li>
                        <li class="sidebar-item active">
                            <Link to="/ddashboard" class="sidebar-link" >
                                <DashboardCustomizeOutlinedIcon className="align-middle" fontSize='small' /> <span class="align-middle">Dashboard</span>
                            </Link>
                        </li>
                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Profile">
                                <AccountCircleOutlinedIcon className="align-middle" /><span class="align-middle">Profile</span>
                            </Link>
                        </li>
                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/dviewpatient">
                                <AirlineSeatFlatIcon className="align-middle" /> <span class="align-middle"> Patient</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Bill">
                                <RateReviewIcon
                                    className="align-middle" /> <span class="align-middle">Bill</span>
                            </Link>
                        </li>



                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Appoinment">
                                <BorderColorOutlinedIcon className="align-middle" /> <span class="align-middle">Appoinment</span>
                            </Link>
                        </li>

                        {/* <li class="sidebar-header">
                            { Report }
                        </li> */}

                        {/* <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Contact">
                            <ContactPhoneIcon  className="align-middle" /> <span class="align-middle">Contact</span>
                            </Link>
                        </li> */}

                        {/* <li class="sidebar-item">
                            <Link class="sidebar-link" to="/ViewAppointment">
                            <CreditScoreOutlinedIcon  className="align-middle" /> <span class="align-middle">View Appointment</span>
                            </Link>
                        </li> */}



                        {/* <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/Payment">
                            <PaymentIcon  className="align-middle" /><span class="align-middle">Payment</span>
                            </Link>
                        </li> */}

                        <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/">
                                <LogoutOutlinedIcon className="align-middle" /> <span class="align-middle">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Dsidebar