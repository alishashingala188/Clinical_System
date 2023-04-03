import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
const ViewDoctor = () => {
  const navigate = useNavigate()
  //search 
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState('');
  const [doctors, setDoctor] = useState([]);
  const [mess, setMess] = useState([]);


  console.log("hello" ,filterdata)
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])
  useEffect(() => {
    getAllAdmin();
    handleDelete();
  }, []);

  const handleFilter = (event) => {
    const getsearch = event.target.value;
    setQuery(getsearch);
    if (getsearch.length > 0) {
      const searchdata = doctors.filter((item) => item.name.includes(getsearch) || item.speciality.includes(getsearch)) ;
      setDoctor(searchdata);

    } else {
      setDoctor(filterdata);
    }
  }

  //get all doctor
  const getAllAdmin = async () => {
    const { data } = await axios.get('http://localhost:5000/api/doctor/');
    setDoctor(data);
     setFilterdata(data);
  }
  //delete doctor

  const handleDelete = async (id) => {
    console.log(id);
    const deleteData = await axios.delete(`http://localhost:5000/api/doctor/${id}`);
    //console.log(deleteData);
    setMess(deleteData);
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
                <div>
                  <input type='search' placeholder='search' value={query} onChange={(e)=>handleFilter(e)} style={{marginBottom:10,border:'1px solid blue',borderRadius:10,height:30}} />
                </div>
                <table cellPadding="0" cellSpacing="100x" border="2px solid" style={{ borderColor: "#3b7ddd", }} >
                  <thead border="2px solid blue">
                    <tr style={{ backgroundColor: "#3b7ddd", fontSize: "20", fontWeight: "inherit", color: "white", textAlign: "center", height: '50px' }} color="">
                      <th>DoctorName</th>
                      <th>Username</th>
                      <th>Education</th>
                      <th>contact_no</th>
                      <th>Speciality</th>
                      <th>Email</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      doctors.map(d => {
                        //console.log(doctor);
                        return <tr style={{ marginBottom: "10px" }}>
                          <td> {d.name} </td>
                          <td> {d.username}  </td>
                          <td> {d.education}</td>
                          <td>{d.contact_no}  </td>
                          <td> {d.speciality} </td>
                          <td> {d.email} </td>
                         
                          <td>
                            <Link to={`/dedit/${d.id}`} className='btn btn-success'>
                              <EditIcon color='' />Edit</Link>
                            <button className='btn btn-danger' style={{ border: "none" }} onClick={() => handleDelete(d.id)}> <DeleteIcon color='' />Delete</button>
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