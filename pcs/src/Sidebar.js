import React from 'react'
// import AddDoctor from './AddDoctor'
import {Link} from 'react-router-dom'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import User from './images/user.png'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" href="index1.php">
                      
				<span class="align-middle">  PATIENT DASHBOARD  </span>
                    </a>

                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
                        </li>

                        <li class="sidebar-item active">
                            <Link to="/dashboard" class="sidebar-link" >
                            <DashboardCustomizeOutlinedIcon className="align-middle"  fontSize='small' /> <span class="align-middle">Dashboard</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Profile">
                          <AccountCircleOutlinedIcon  className="align-middle" /><span class="align-middle">Profile</span>
                            </Link>
                        </li>


                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Doctor">
                            <FavoriteBorderOutlinedIcon  className="align-middle" /> <span class="align-middle"> Doctor</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/aform">
                            <BorderColorOutlinedIcon 
                              className="align-middle" /> <span class="align-middle">Appointment</span>
                            </Link>
                        </li>

                      

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/feedback">
                            <ThumbUpAltIcon  className="align-middle" /> <span class="align-middle">Feedback</span>
                            </Link>
                        </li>

                        {/* <li class="sidebar-header">
                            { Report }
                        </li> */}

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/contact">
                            <ContactPhoneIcon  className="align-middle" /> <span class="align-middle">Contact</span>
                            </Link>
                        </li>

                        {/* <li class="sidebar-item">
                            <Link class="sidebar-link" to="/ViewAppointment">
                            <CreditScoreOutlinedIcon  className="align-middle" /> <span class="align-middle">View Appointment</span>
                            </Link>
                        </li> */}

                       

                        <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/Payment">
                            <PaymentIcon  className="align-middle" /><span class="align-middle">Payment</span>
                            </Link>
                        </li>

                        <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/Logout">
                            <LogoutOutlinedIcon  className="align-middle" /> <span class="align-middle">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar