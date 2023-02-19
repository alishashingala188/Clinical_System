import React from 'react'
import AddDoctor from './AddDoctor'
import {Link} from 'react-router-dom'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" href="index1.php">
				<span class="align-middle">ADMIN DASHBORD</span>
                    </a>

                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
                        </li>

                        <li class="sidebar-item active">
                            <Link to="/" class="sidebar-link" >
                            <DashboardCustomizeOutlinedIcon className="align-middle"  fontSize='small' /> <span class="align-middle">Dashboard</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/Profile">
                          <AccountCircleOutlinedIcon  className="align-middle" /><span class="align-middle">Profile</span>
                            </Link>
                        </li>



                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/AddClinic">
                            <LocalHospitalOutlinedIcon  className="align-middle" /><span class="align-middle">Add Clinic</span>
                            </Link>
                        </li>


                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/AddDoctor">
                            <FavoriteBorderOutlinedIcon  className="align-middle" /> <span class="align-middle">Add Doctor</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/AddMedical">
                            <MedicalInformationOutlinedIcon  className="align-middle" /> <span class="align-middle">Add Medical</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/AddMedicine">
                            <VaccinesRoundedIcon  className="align-middle" /> <span class="align-middle">Add Medicine</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/AddReceptionist">
                            <BorderColorOutlinedIcon  className="align-middle" /> <span class="align-middle">Create Receptionist</span>
                            </Link>
                        </li>

                        <li class="sidebar-header">
                            Report
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/ViewMedicine">
                            <CreditScoreOutlinedIcon  className="align-middle" /> <span class="align-middle">View Medicine</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/ViewReceptionist">
                            <CreditScoreOutlinedIcon  className="align-middle" /> <span class="align-middle">View Receptionist</span>
                            </Link>
                        </li>

                        <li class="sidebar-item">
                            <Link class="sidebar-link" to="/ViewDoctor">
                            <CreditScoreOutlinedIcon  className="align-middle" /> <span class="align-middle">View Doctor</span>
                            </Link>
                        </li>

                        <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/Changepwd">
                            <PasswordOutlinedIcon  className="align-middle" /><span class="align-middle">Change Password</span>
                            </Link>
                        </li>

                        <li class="sidebar-item ">
                            <Link class="sidebar-link" to="/Alogout">
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