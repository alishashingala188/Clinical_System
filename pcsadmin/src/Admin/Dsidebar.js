import React from 'react'
// import AddDoctor from './AddDoctor'
import { Link ,useNavigate} from 'react-router-dom'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import User from '../images/user.png'
import RateReviewIcon from '@mui/icons-material/RateReview';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import { message } from "antd";

const Dsidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/");
      };
    return (
        <>
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index1.php">
                        <span className="align-middle">Doctor dashboard </span>
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>
                        <li className="sidebar-item active">
                            <Link to="/ddashboard" className="sidebar-link" >
                                <DashboardCustomizeOutlinedIcon classNameName="align-middle" fontSize='small' /> <span className="align-middle">Dashboard</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/dprofile">
                                <AccountCircleOutlinedIcon classNameName="align-middle" /><span className="align-middle">Profile</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/dviewpatient">
                                <AirlineSeatFlatIcon classNameName="align-middle" /> <span className="align-middle"> Patient</span>
                            </Link>
                        </li>

                        
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/dviewappointment">
                                <BorderColorOutlinedIcon classNameName="align-middle" /> <span className="align-middle"> View Appoinment</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/calander">
                                <BorderColorOutlinedIcon classNameName="align-middle" /> <span className="align-middle"> Schedule</span>
                            </Link>
                        </li>
                        {/* <li className="sidebar-header">
                            { Report }
                        </li> */}
                        {/* <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Contact">
                            <ContactPhoneIcon  classNameName="align-middle" /> <span className="align-middle">Contact</span>
                            </Link>
                        </li> */}

                        {/* <li className="sidebar-item">
                            <Link className="sidebar-link" to="/ViewAppointment">
                            <CreditScoreOutlinedIcon  classNameName="align-middle" /> <span className="align-middle">View Appointment</span>
                            </Link>
                        </li> */}



                        {/* <li className="sidebar-item ">
                            <Link className="sidebar-link" to="/Payment">
                            <PaymentIcon  classNameName="align-middle" /><span className="align-middle">Payment</span>
                            </Link>
                        </li> */}

                        <li className="sidebar-item " onClick={handleLogout}>
                            <Link className="sidebar-link" to="/" >
                                <LogoutOutlinedIcon classNameName="align-middle" /> <span className="align-middle">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Dsidebar