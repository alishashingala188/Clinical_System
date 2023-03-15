import {useState,useEffect} from 'react'
import React from 'react'
import './Info.css'
import image from './14.jpg'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'

function Info() {
  const [name,setName] = useState([]);

 useEffect(() =>{
  getAllAdmin();
},[])

  const getAllAdmin= async ()=>{
    const {data} = await axios.get('http://localhost:5000/api/admin/');
  console.log(data);
  setName(data);
  
  }
  return (
    <>
      <div class="wrapper">
        <Sidebar />
        <div class="wrapper">
          <div class="main">
            <Nav />
            <main class="content">
              <div class="container-fluid p-0"></div>
              <div class="mb-3">
                  <h1 class="h3 d-inline align-middle">Add Doctor</h1>
                </div>
          <div className='pcard'>
        <div className="upper-container">
        <div className="image-container">
            <img src={image} alt='' height='100px' class="images" width='200px'/>
        </div>
   </div>

    <div className='lower-container'>
       
         <div className='filed-container'>
          {
            name.map(admin => {
              console.log(admin);
             return(
              <table cellPadding="20" cellSpacing="30" style={{textAlign:"center",marginLeft:400,fontWeight:"bold"}}> 
                 <tr>
                  <td>Name :: </td>
                  <td>{admin.name}</td>
                </tr>
                <tr>
                  <td>Email :: </td>
                  <td>{admin.email}</td>
                </tr>
                <tr>
                  <td>UserName :: </td>
                  <td>{admin.username}</td>
                </tr>
                <tr>
                  <td>Contact No :: </td>
                  <td>{admin.contact_no}</td>
                </tr>
               
              </table>
              // <div style={{marginLeft:150,padding:'10px 10px 10px 10px',marginBottom:100}}>
              // <h4>Email :{admin.email} </h4>
              // <h4>UserName :{admin.username} </h4>
              // <h4>Contact :{admin.contact_no} </h4>
              // <h4>Address :  {admin.address} </h4>
              // </div>
             )
               })
          }
       
         </div>
        
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




export default Info;