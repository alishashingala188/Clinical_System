import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link,useNavigate } from 'react-router-dom';
const ViewPatient = () => {
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState('');

  const handleFilter = (event) => {
    const getsearch = event.target.value;
    setQuery(getsearch);
    if (getsearch.length > 0) {
      const searchdata = patients.filter((item) => item.full_name.toLowerCase().includes(getsearch.toLowerCase()));
      setPatient(searchdata);

    } else {
      setPatient(filterdata);
    }
  }

  const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
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
   setFilterdata(data);
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
              <h1>View Doctor</h1>
              <br/>
              <div>
                  <input type='search' placeholder='search' value={query} onChange={(e)=>handleFilter(e)} style={{marginBottom:10,border:'1px solid blue',borderRadius:10,height:30}} />
                </div>
                <table   cellPadding="0" cellSpacing="100px" border="2px solid" style={{borderColor:"#3b7ddd"}} >
                  <thead border="2px solid blue">
                    <tr style={{backgroundColor:"#3b7ddd",fontSize:"20",fontWeight:"bold",color:"white",textAlign:"center",}} color="primary">
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
                      patients.map(patient => {
                        //console.log(doctor);
                       return  <tr style={{marginBottom:"-20px"}}>
                        <td> {patient.full_name} </td>
                          <td> {patient.username}  </td>
                          <td> {patient.address}</td>
                          <td>{patient.contact_no}  </td>
                          <td> {patient.age} </td>
                          <td> {patient.sec_question} </td>
                          <td>  {patient.answer}</td> 
                          <td> <td>
                            <Link to={`/pedit/${patient.id}`} className="btn btn-success">
                              <EditIcon color='' />Edit</Link>
                              <button className='btn btn-danger'  style={{border:"none"}} onClick={()=>handleDelete(patient.id)}> <DeleteIcon color='' />Delete</button>
                         </td></td>
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