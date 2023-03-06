import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
const ViewDoctor = () => {
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    getAllAdmin();
  }, []);

  const getAllAdmin = async () => {
    const { data } = await axios.get('http://localhost:5000/api/doctor/');
   console.log(data);
    setDoctor(data)
  }
  return (
    <>
      <div class="wrapper">
        <Sidebar />
        <div class="wrapper">
          <div class="main">
            <Nav />
            <main class="content">
              <div class="container-fluid p-0">
              <h1>View Doctor</h1>
              <br/>
                <table cellPadding="10" cellSpacing="300px" border="2px solid" style={{borderColor:"#3b7ddd"}} >
                
                  <thead border="2px solid blue">
                    <tr style={{backgroundColor:"#3b7ddd",fontSize:"20",fontWeight:"bold",color:"white",textAlign:"center"}} color="primary">
                      <th>DoctorName</th>
                      <th>Username</th>
                      <th>Education</th>
                      <th>contact_no</th>
                      <th>Speciality</th>
                      <th>Email</th>
                      <th>Clinic_name</th>
                      <th>Operation</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      doctors.map(d => {
                        //console.log(doctor);
                       return  <tr style={{marginBottom:"20px"}}>
                        <td> {d.name} </td>
                          <td> {d.username}  </td>
                          <td> {d.education}</td>
                          <td>{d.contact_no}  </td>
                          <td> {d.speciality} </td>
                          <td> {d.email} </td>
                          <td>  {d.clinic_name}</td> 
                          <td></td>
                        </tr>
                      })
                    }
                  
                  </tbody>
                </table>
              </div>
            </main>
            <Footer />
          </div>
        </div>


      </div>


    </>
  )
}

export default ViewDoctor