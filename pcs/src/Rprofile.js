import { useState, useEffect } from 'react'
import React from 'react'
import './Info.css'
import image from './14.jpg'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Dprofile = () => {
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    getAllPatient();
  }, []);
  console.log("", patient);
  const getAllPatient = async (req) => {
    const data = await axios.get(`http://localhost:5000/api/rece/profile`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ' Bearer ' + localStorage.getItem("token")
        }
      }).then((res) => {
        setPatient(res.data.data.user)
        console.log(res.data.data.user)
      })
      console.log(data);
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
              </div>
              <div className='pcard'>
                <div className="upper-container">
                  <div className="image-container">
                    <img src={image} alt='' height='100px' className="images" width='200px' />
                  </div>
                </div>  
                <div className='lower-container'>
                <h1>{patient.full_name}</h1>
                  <div className='filed-container'>
               
                          <table cellPadding="10" cellSpacing="30" style={{ textAlign: "center", marginLeft: 400, fontWeight: "bold" ,marginTop:'-70px'}}>
                           
                            <tr>
                              <td>Email :: </td>
                              <td>{patient.email}</td>
                            </tr>
                            <tr>
                              <td>UserName :: </td>
                              <td>{patient.username}</td>
                            </tr>
                            <tr>
                              <td>Contact No :: </td>
                              <td>{patient.contact_no}</td>
                            </tr>
                            <tr>
                              <td>education :: </td>
                              <td>{patient.education}</td>
                            </tr>
                            <tr>
                              <td>Speciality :: </td>
                              <td>{patient.speciality}</td>
                            </tr>
                            {/* <tr>
                            <td></td>
                            <td>
                              <Link to={`/Changepwd/${patient.id}`} className='btn btn-info'>
                                <EditIcon color='' />Change password</Link>
                            </td>
                          </tr> */}
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