import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import './App.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
const Aform = () => {
  const [patients, setPatient] = useState([]);
  const [doctors, setDoctor] = useState([]);
  const [did, setDid] = useState(0);
  const [uid, setUid] = useState(0);
  const [a_reason, setA_reason] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  
const {id}=useParams();
//console.log(id)
  const addApoointmenthandler = async (e) => {
    e.preventDefault();
    const data = {
      did:doctors.id,
      uid:patients.id,
      a_reason:a_reason,
      date:date,
      time:time,
      contact_no:767677677,
      status:"pending"
    }
    console.log(data);
    await axios.post('http://localhost:5000/api/addTodo', data)
    .then(() => {
      message.success("appointment sucessfully")
    }).catch(()=>{
      message.error("something are wrong")

    })
  }
  useEffect(() => {
    getAllPatient();
    getAllDoctor();
  }, []);
  const getAllPatient = async (req) => {
    const data = await axios.get(`http://localhost:5000/api/user/book`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ' Bearer ' + localStorage.getItem("token")
        }
      }).then((res) => {
        setPatient(res.data.data.user)
      
      })
    
  }
  const getAllDoctor = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/doctor/${id}`)
    .then((res) => {
      console.log('doctor',res.data)
      setDoctor(res.data.data.user)
    })
    // const resData = await data.json();
    
  }

  const checkdate=()=>{
var date=document.getElementById('date').value;
var varDate = new Date(date);
var today=new Date();
if(varDate <= today){
  alert("the date must be greter then today date");
  return false
}
 return true; }
  return (
    <div class="wrapper">
      <Sidebar />
      <div class="wrapper">
        <div class="main">
          <Nav />
          <main class="content">
            <div class="container-fluid p-0"></div>
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form onSubmit={addApoointmenthandler}>
                  <h1>Appointment Form</h1><br></br>
                  <div class="flex flex-wrap formbold--mx-3">
                    <div class="w-full sm:w-half formbold-px-3">
                      <div class="formbold-mb-5 w-full">
                        <label for="date" class="formbold-form-label"> Doctor Name </label>
                        <input name='did' style={{ width: 250, height: 45, border: '1px gray', borderRadius: 5 }}  value={doctors.name}/>  
                      </div>
                    </div>
                    <div class="w-full sm:w-half formbold-px-3">
                      <div class="formbold-mb-5">
                        <label for="time" class="formbold-form-label"> patient Name </label>
                        <input name='uid' style={{ width: 250, height: 45, border: '1px gray', borderRadius: 5 }}
                         value={patients.full_name}>
                        </input>  
                      </div>
                    </div>
                  </div>
                  <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label">Appointment Reason </label>
                    <textarea
                      rows={3}
                      cols={80}
                      name="a_reason"
                      id="appointment"
                      class="formbold-form-input"
                      onChange={(e)=>setA_reason(e.target.value)}
                    ></textarea>
                  </div>
                  <div class="flex flex-wrap formbold--mx-3">
                    <div class="w-full sm:w-half formbold-px-3">
                      <div class="formbold-mb-5 w-full">
                        <label for="date" class="formbold-form-label"> Date </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          onChangeCapture={checkdate}
                          onChange={(e)=>setDate(e.target.value)}
                          class="formbold-form-input"
                        />
                      </div>
                    </div>
                    <div class="w-full sm:w-half formbold-px-3">
                      <div class="formbold-mb-5">
                        <label for="time" class="formbold-form-label"> Time </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          class="formbold-form-input"
                          onChange={(e)=>setTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="formbold-btn" type='submit'>Book Appointment</button>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Aform