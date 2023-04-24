import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Rsidebar'
import Nav from './Rnav'
import Footer from './Rfooter'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const ViewPatient = () => {
  const [patients, setPatient] = useState([]);
  const [mess, setMess]=useState([]);
  useEffect(() => {
    getAllPatient();
    handleDelete();
  },[]);

  const getAllPatient = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user/');
   console.log(data);
   setPatient(data)
  }
  const handleDelete=async(id)=>{
    console.log(id);  
    const deleteData = await axios.delete(`http://localhost:5000/api/user/${id}`);
    console.log(deleteData);
    setMess(deleteData)

  }
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="wrapper">
          <div className="main">
            <Nav />
            <main className="content">
              <div className="container-fluid p-0">
              <h1>View Patient</h1>
              <br/>
                <table cellPadding="5" cellSpacing="200px" border="2px solid" style={{borderColor:"#3b7ddd"}} >
                
                  <thead border="2px solid blue">
                    <tr style={{backgroundColor:"#3b7ddd",fontSize:"20",fontWeight:"bold",color:"white",textAlign:"center"}} color="primary">
                      <th>patient name</th>
                      <th>User name </th>
                      <th>address</th>
                      <th>contact_no</th>
                      <th>age</th>
                      <th>sec_question</th>
                      <th>answer</th>        
                    </tr>
                  </thead>
                  <tbody>
                    {
                      patients.map(patient => {
                        //console.log(doctor);
                       return  <tr style={{marginBottom:"20px"}}>
                        <td> {patient.full_name} </td>
                          <td> {patient.username}  </td>
                          <td> {patient.address}</td>
                          <td>{patient.contact_no}  </td>
                          <td> {patient.age} </td>
                          <td> {patient.sec_question} </td>
                          <td>  {patient.answer}</td> 
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