import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
const ViewDoctor = () => {
  const [appointments, setAppointments] = useState([]);
  const [mess, setMess] = useState([]);
  useEffect(() => {
    getAllAppoitment();
  }, []);

  const getAllAppoitment = async () => {
   const { data } = await axios.get(`http://localhost:5000/api/user/appointment`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': ' Bearer ' + localStorage.getItem("token")
        }
      });
      console.log(data);
    setAppointments(data.data);
  }
  const handleDelete = async (id) => {
    console.log(id);
    const deleteData = await axios.delete(`http://localhost:5000/api/${id}`);
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
                <h1>View Appointment</h1>
                <br />
                <table cellPadding="5" cellSpacing="200px" border="2px solid" style={{ borderColor: "#3b7ddd" }} >
                  <thead border="2px solid blue">
                    <tr style={{ backgroundColor: "#3b7ddd", fontSize: "20", fontWeight: "bold", color: "white", textAlign: "center" }} color="primary">
                      <th>doctor name</th>
                      <th>contact_no</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Appointment reason</th>
                      <th>Status</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Array.isArray(appointments)
                        ? appointments.map(d => {
                          // console.log(d)
                          return <tr style={{ marginBottom: "20px" }}>
                            <td> {d.users.name} </td>
                            <td>{d.contact_no}  </td>
                            <td> {d.date} </td>
                            <td> {d.time} </td>
                            <td>  {d.a_reason}</td>
                            <td>{d.status}</td>
                            <td>
                              <button className='btn btn-danger' style={{ border: "none" }} onClick={() => handleDelete(d.id)}> <DeleteIcon color='' />Delete</button>
                            </td>
                          </tr>
                        })
                        : null}
        

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