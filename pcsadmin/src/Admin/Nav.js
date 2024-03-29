import { useEffect, useState } from 'react'
import Avtar1 from '../images/avatars/avatar-2.jpg'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Nav = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })

    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        getAllAdmin();
    }, []);
    //console.log("", admin);
    const getAllAdmin = async (req) => {
        const data = await axios.get(`http://localhost:5000/api/admin/profile`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer ' + localStorage.getItem("token")
                }
            }).then((res) => {
                setAdmin(res.data.data.user)
               // console.log(res.data.data.user)
            })
    }
    return (
        <>
            <nav className="navbar navbar-expand navbar-light navbar-bg" href="#">
                <p className="sidebar-toggle js-sidebar-toggle">
                    <i className="hamburger align-self-center"></i>
                </p>

                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav navbar-align">
                        <li className="nav-item dropdown">
                            <Link className="nav-icon dropdown-toggle" to="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                <div className="position-relative">
                                    <NotificationsNoneOutlinedIcon className="align-middle" />
                                    <span className="indicator">4</span>
                                </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                <div className="dropdown-menu-header">
                                    4 New Notifications
                                </div>
                                <div className="list-group">
                                    <a href="" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-danger" data-feather="alert-circle"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Update completed</div>
                                                <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                <div className="text-muted small mt-1">30m ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-warning" data-feather="bell"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Alert Buddy</div>
                                                <div className="text-muted small mt-1"> Something Went a Wrong.</div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-primary" data-feather="home"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">Login from 192.186.1.8</div>
                                                <div className="text-muted small mt-1">5h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <i className="text-success" data-feather="user-plus"></i>
                                            </div>
                                            <div className="col-10">
                                                <div className="text-dark">New connection</div>
                                                <div className="text-muted small mt-1">Christina accepted your request.</div>
                                                <div className="text-muted small mt-1">14h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="#" className="text-muted">Show all notifications</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                <div className="position-relative">
                                    <EmailOutlinedIcon className="align-middle" />
                                    <span className="indicator">6</span>

                                </div>

                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                <div className="dropdown-menu-header">
                                    <div className="position-relative">
                                        4 New Messages
                                    </div>
                                </div>
                                <div className="list-group">
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle"
                                                    alt="Vanessa Tucker" />
                                            </div>
                                            <div className="col-10 ps-2">
                                                <div className="text-dark">Vanessa Tucker</div>
                                                <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.
                                                </div>
                                                <div className="text-muted small mt-1">15m ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={Avtar1} className="avatar img-fluid rounded-circle"
                                                    alt="William Harris" />
                                            </div>
                                            <div className="col-10 ps-2">
                                                <div className="text-dark">William Harris</div>
                                                <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                                <div className="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle"
                                                    alt="Christina Mason" />
                                            </div>
                                            <div className="col-10 ps-2">
                                                <div className="text-dark">Christina Mason</div>
                                                <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                                <div className="text-muted small mt-1">4h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src="img/avatars/user.png" className="avatar img-fluid rounded-circle"
                                                    alt="Sharon Lessman" />
                                            </div>
                                            <div className="col-10 ps-2">
                                                <div className="text-dark">Sharon Lessman</div>
                                                <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac,
                                                    mattis non.</div>
                                                <div className="text-muted small mt-1">5h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="#" className="text-muted">Show all messages</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                <i className="align-middle" data-feather="settings"></i>
                            </a>

                            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" data-bs-toggle="dropdown">
                                <b> {admin.name}</b>
                            </a>


                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav