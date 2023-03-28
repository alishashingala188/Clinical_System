import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Rsidebar'
import Nav from './Rnav'
import Footer from './Rfooter'
import './table.css'
import { useNavigate ,Link} from 'react-router-dom'
import DescriptionIcon from '@mui/icons-material/Description';
const ViewDoctor = () => {
  const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    getAllAppoitment();
  }, []);

  
  const getAllAppoitment = async () => {
    const { data } = await axios.get('http://localhost:5000/api/');
    setAppointment(data)
  }

//   const handleDelete=async(id)=>{
//     console.log(id);
//     const deleteData = await axios.delete(`http://localhost:5000/api/doctor/${id}`);
//     console.log(deleteData);
//     setMess(deleteData)

//   }
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
                <table cellPadding="5" cellSpacing="300" border="2px solid" style={{ borderColor: "#3b7ddd" }} >
                  <thead border="2px solid blue">
                    <tr style={{ backgroundColor: "#3b7ddd", fontSize: "20", fontWeight: "bold", color: "white", textAlign: "center" ,height:'30px'}} color="primary">      
                      <th>Patient id</th>
                      <th>doctor id</th>
                      <th>contact_no</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Appointment reason</th>
                      <th>Status</th>
                      <th>operation</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      appointment.map(d => {
                        //console.log(doctor);
                        return <tr style={{ marginBottom: "20px" }}>
                          <td> {d.patients.full_name} </td>
                          <td> {d.patients.name} </td>
                          <td> {d.contact_no}  </td>
                          <td> {d.date} </td>
                          <td> {d.time} </td>
                          <td> {d.a_reason}</td>
                          <td> {d.status}</td>
                          <td>
                            <Link to={`/invoiceform/${d.uid}`}>
                              <DescriptionIcon color='success' />Bill</Link>
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