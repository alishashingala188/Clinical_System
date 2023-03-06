import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
const ViewPatient = () => {
  const [patients, setPatient] = useState([]);
  useEffect(() => {
    getAllPatient();
  }, []);

  const getAllPatient = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user/');
   console.log(data);
   setPatient(data)
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
                      <th>fullname</th>
                      <th>Username</th>
                      <th>address</th>
                      <th>contact_no</th>
                      <th>age</th>
                      <th>sec_question</th>
                      <th>answer</th>
                      <th>Operation</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      patients.map(p => {
                        //console.log(doctor);
                       return  <tr style={{marginBottom:"20px"}}>
                        <td> {p.full_name} </td>
                          <td> {p.username}  </td>
                          <td> {p.address}</td>
                          <td>{p.contact_no}  </td>
                          <td> {p.age} </td>
                          <td> {p.sec_question} </td>
                          <td>  {p.answer}</td> 
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

export default ViewPatient