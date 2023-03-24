import React from 'react'
// import AddDoctor from './AddDoctor'
import { Link, useNavigate } from 'react-router-dom'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { message } from "antd";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/signin");
    };
    return (
        <>
            <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" href="index1.php">

                        <span class="align-middle">  </span>
                    </a>

                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
                        </li>

                        <li class="sidebar-item active">
                            <Link to="/" class="sidebar-link" >
                                <DashboardCustomizeOutlinedIcon className="align-middle" fontSize='small' /> <span class="align-middle">Dashboard</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/profile">
                                <AccountCircleOutlinedIcon className="align-middle" /><span class="align-middle">Profile</span>
                            </Link>
                        </li>


                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Doctor">
                                <FavoriteBorderOutlinedIcon className="align-middle" /> <span class="align-middle"> Doctor</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/appointment">
                                <BorderColorOutlinedIcon
                                    className="align-middle" /> <span class="align-middle">Book Appointment</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/viewappointment">
                                <BorderColorOutlinedIcon
                                    className="align-middle" /> <span class="align-middle">View Appointment</span>
                            </Link>
                        </li>



                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Feedback">
                                <ThumbUpAltIcon className="align-middle" /> <span class="align-middle">Feedback</span>
                            </Link>
                        </li>

                        {/* <li class="sidebar-header">
                            { Report }
                        </li> */}

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Contact">
                                <ContactPhoneIcon className="align-middle" /> <span class="align-middle">Contact</span>
                            </Link>
                        </li>

                        {/* <li class="sidebar-item">
                            <Link class="sidebar-link" to="/ViewAppointment">
                            <CreditScoreOutlinedIcon  className="align-middle" /> <span class="align-middle">View Appointment</span>
                            </Link>
                        </li> */}

                        <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/bill">
                                <PaymentIcon className="align-middle" /><span class="align-middle">Bill</span>
                            </Link>
                        </li>

                        <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/Payment">
                                <PaymentIcon className="align-middle" /><span class="align-middle">Payment</span>
                            </Link>
                        </li>

                        <li className="sidebar-item " onClick={handleLogout}>
                            <Link className="sidebar-link" to="/signin" >
                                <LogoutOutlinedIcon classNameName="align-middle" /> <span className="align-middle">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar