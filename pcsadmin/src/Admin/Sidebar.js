import React from 'react'   
import { Link ,useNavigate} from 'react-router-dom'
import { message } from "antd";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import User from '../images/user.png'
const Sidebar = () => {
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
                      
				<span className="align-middle"><img src={User} width='120' height='120' alt='user' style={{marginLeft:30,marginBottom:-10}} />  </span>
                    </a>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>

                        <li className="sidebar-item active">
                            <Link to="/dashboard/:id" className="sidebar-link" >
                            <DashboardCustomizeOutlinedIcon classNameName="align-middle"  fontSize='small' /> <span className="align-middle">Dashboard</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Profile">
                          <AccountCircleOutlinedIcon  classNameName="align-middle" /><span className="align-middle">Profile</span>
                            </Link>
                        </li>


                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/AddDoctor">
                            <FavoriteBorderOutlinedIcon  classNameName="align-middle" /> <span className="align-middle">Add Doctor</span>
                            </Link>
                        </li>



                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/addReceptionist">
                            <FavoriteBorderOutlinedIcon  classNameName="align-middle" /> <span className="align-middle">Add Receptionist</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/ViewDoctor">
                            <MedicalInformationOutlinedIcon  classNameName="align-middle" /> <span className="align-middle">View Doctor</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Chart">
                            <BorderColorOutlinedIcon  classNameName="align-middle" /> <span className="align-middle">Chart</span>
                            </Link>
                        </li>

                        <li className="sidebar-header">
                            Report
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/ViewPatient">
                            <VaccinesRoundedIcon  classNameName="align-middle" /> <span className="align-middle">View Patient</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/viewappointment">
                            <CreditScoreOutlinedIcon  classNameName="align-middle" /> <span className="align-middle">View Appointment</span>
                            </Link>
                        </li>
                        <li className="sidebar-item ">
                            <Link className="sidebar-link" to="/Changepwd">
                            <PasswordOutlinedIcon  classNameName="align-middle" /><span className="align-middle">Change Password</span>
                            </Link>
                        </li>

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

export default Sidebar