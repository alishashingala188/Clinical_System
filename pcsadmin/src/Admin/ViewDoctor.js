import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const ViewDoctor = () => {
  const [doctors, setDoctor] = useState([]);
  const [mess, setMess]=useState([]);
  useEffect(() => {
    getAllAdmin();
    handleDelete();
  }, []);

  const getAllAdmin = async () => {
    const { data } = await axios.get('http://localhost:5000/api/doctor/');
    // const resData = await data.json();
    setDoctor(data)
  }

  const handleDelete=async(id)=>{
    console.log(id);
    const deleteData = await axios.delete(`http://localhost:5000/api/doctor/${id}`);
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
                <h1>View Doctor</h1>
                <br />
                <table cellPadding="5" cellSpacing="200px" border="2px solid" style={{ borderColor: "#3b7ddd",}} >
                  <thead border="2px solid blue">
                    <tr style={{ backgroundColor: "#3b7ddd", fontSize: "25", fontWeight: "inherit", color: "white", textAlign: "center",height:'50px'}} color="">
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
                        return <tr style={{ marginBottom: "20px" }}>
                          <td> {d.name} </td>
                          <td> {d.username}  </td>
                          <td> {d.education}</td>
                          <td>{d.contact_no}  </td>
                          <td> {d.speciality} </td>
                          <td> {d.email} </td>
                          <td>  {d.clinic_name}</td>
                          <td>
                            <Link to={`/dedit/${d.id}`} className='btn btn-success'>
                              <EditIcon color='' />Edit</Link>
                              <button className='btn btn-danger' style={{border:"none"}} onClick={()=>handleDelete(d.id)}> <DeleteIcon color='' />Delete</button>
                         </td>
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