import { useState, useEffect } from 'react'
import React from 'react'
import './Info.css'
import image from './14.jpg'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import {EditIcon} from '@mui/icons-material'
const Profile = () => {
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
  console.log("", admin);
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
        console.log(res.data.data.user)
      })
  }
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="wrapper">
          <div className="main">
            <Nav />
            <main className="content">
              <div className="container-fluid p-0"></div>
              <div className="mb-3">
                <h1 className="h3 d-inline align-middle">Add Doctor</h1>
              </div>
              <div className='pcard'>
                <div className="upper-container">
                  <div className="image-container">
                    <img src={image} alt='' height='100px' className="images" width='200px' />
                  </div>
                </div>

                <div className='lower-container'>
                  <div className='filed-container'>
                
                          <table cellPadding="20" cellSpacing="30" style={{ textAlign: "center", marginLeft: 400, fontWeight: "bold" }}>
                            <tr>
                              <td>Name :: </td>
                              <td>{admin.name}</td>
                            </tr>
                            <tr>
                              <td>Email :: </td>
                              <td>{admin.email}</td>
                            </tr>
                            <tr>
                              <td>UserName :: </td>
                              <td>{admin.username}</td>
                            </tr>
                            <tr>
                              <td>Contact No :: </td>
                              <td>{admin.contact_no}</td>
                            </tr>
                            <tr>
                            <td></td>
                            <td>
                              <Link to={`/changeprofile/${admin.id}`} className='btn btn-info'>
                               Change Profile</Link>
                            </td>
                          </tr>
                          </table>
                      
                  </div>
                  <Link />
                </div>
                <div>
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




export default Profile;