import { useState, useEffect } from 'react'
import React from 'react'
import './Info.css'
import image from './14.jpg'
import Sidebar from './Dsidebar'
import Nav from './Dnav'
import Footer from './Dfooter'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
const Dprofile = () => {
  const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    getAllAdmin();
  }, []);
  console.log("", doctor);
  const getAllAdmin = async (req) => {
    const data = await axios.get(`http://localhost:5000/api/doctor/profile`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ' Bearer ' + localStorage.getItem("token")
        }
      }).then((res) => {
        setDoctor(res.data.data.user)
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
                <h1>{doctor.name}</h1>
                  <div className='filed-container'>
               
                          <table cellPadding="10" cellSpacing="30" style={{ textAlign: "center", marginLeft: 400, fontWeight: "bold" ,marginTop:'-70px'}}>
                           
                            <tr>
                              <td>Email :: </td>
                              <td>{doctor.email}</td>
                            </tr>
                            <tr>
                              <td>UserName :: </td>
                              <td>{doctor.username}</td>
                            </tr>
                            <tr>
                              <td>Contact No :: </td>
                              <td>{doctor.contact_no}</td>
                            </tr>
                            <tr>
                              <td>education :: </td>
                              <td>{doctor.education}</td>
                            </tr>
                            <tr>
                              <td>Speciality :: </td>
                              <td>{doctor.speciality}</td>
                            </tr>
                            <tr>
                            <td></td>
                            <td>
                              <Link to={`/dchangeprofile/${doctor.id}`} className='btn btn-info'>
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




export default Dprofile;