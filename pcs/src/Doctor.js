import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import './table.css'
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
const Doctor = () => {
  const [doctors, setDoctor] = useState([]);

  useEffect(() => {
    getAllAdmin();

  }, []);
  const getAllAdmin = async () => {
    const { data } = await axios.get('http://localhost:5000/api/doctor/');
    // const resData = await data.json();
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
                <br />
                <table style={{ borderColor: "#3b7ddd", marginLeft: 50, width: "100%" }} >

                  <tbody >
                    <tr >
                      {
                        doctors.map(d => {
                          //console.log(doctor);
                          return (
                            <tr  >
                              <td ><img src={'http://localhost:5000/' + d.image} width={150} height={150} style={{marginBottom:20  }} /> </td><br/>
                              <td></td>
                            <td colSpan='2'> <b>Name ::</b>{d.name}<br/>
                            <b>Email Id ::</b>{d.email}<br/>
                            <b>Speciality ::</b>{d.speciality}
                            </td>
                            <td><Link to={`/viewmore/${d.id}`} className='btn btn-info'><MoreVertIcon />View More </Link></td>
                            <td><Link to={`/appointment/${d.id}`} className='btn btn-info'><BookOnlineIcon />Book Appointment </Link></td>
                            </tr>
                          )



                        })
                      }
                    </tr>
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

export default Doctor