import React from 'react'
// import AddDoctor from './AddDoctor'
import { Link, useNavigate } from 'react-router-dom'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { message } from "antd";

const Rsidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/rlogin");
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
                            <Link to="/rdashboard" class="sidebar-link" >
                                <DashboardCustomizeOutlinedIcon className="align-middle" fontSize='small' /> <span class="align-middle">Dashboard</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/rprofile">
                                <AccountCircleOutlinedIcon className="align-middle" /><span class="align-middle">Rprofile</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/rviewpatient">
                                <FavoriteBorderOutlinedIcon className="align-middle" /> <span class="align-middle"> View Patient </span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/rviewappointment">
                                <FavoriteBorderOutlinedIcon className="align-middle" /> <span class="align-middle"> View Appointment </span>
                            </Link>
                        </li>             

                        <li className="sidebar-item " onClick={handleLogout}>
                            <Link className="sidebar-link" to="/rlogin" >
                                <LogoutOutlinedIcon classNameName="align-middle" /> <span className="align-middle">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Rsidebar