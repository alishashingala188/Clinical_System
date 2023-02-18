import React from 'react'
import Admin from '../images/user.png'
import AddDoctor from './AddDoctor'
import Dashboard from './Dashboard'
const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" href="index1.php">
                    <img  src={Admin} alt="images" width={130} style={{marginLeft:25,marginBottom:-20}}/>
                    </a>

                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
                        </li>

                        <li class="sidebar-item active">
                            <a class="sidebar-link" to={<Dashboard/>}>
                                <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="profile.php">
                                <i class="align-middle" data-feather="user"></i> <span class="align-middle">Profile</span>
                            </a>
                        </li>



                        <li class="sidebar-item">
                            <a class="sidebar-link" href={AddDoctor}>
                                <i class="align-middle" data-feather="thumbs-up"></i> <span class="align-middle">Add Clinic</span>
                            </a>
                        </li>


                        <li class="sidebar-item">
                            <a class="sidebar-link" href="adddoctor.php">
                                <i class="align-middle" data-feather="heart"></i> <span class="align-middle">Add Doctor</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="addmedical.php">
                                <i class="align-middle" data-feather="edit-3"></i> <span class="align-middle">Add Medical</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="addmedicine.php">
                                <i class="align-middle" data-feather="shopping-bag"></i> <span class="align-middle">Add Medicine</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="addreceptionist.php">
                                <i class="align-middle" data-feather="edit-3"></i> <span class="align-middle">Create Receptionist</span>
                            </a>
                        </li>

                        <li class="sidebar-header">
                            Report
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="viewmedicine.php">
                                <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">View Medicine</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="viewreceptionist.php">
                                <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">View Receptionist</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="viewdoctor.php">
                                <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">View Doctor</span>
                            </a>
                        </li>

                        <li class="sidebar-item ">
                            <a class="sidebar-link" href="changepwd.php">
                                <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Change Password</span>
                            </a>
                        </li>

                        <li class="sidebar-item ">
                            <a class="sidebar-link" href="alogout.php">
                                <i class="align-middle" data-feather="log-out"></i> <span class="align-middle">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar