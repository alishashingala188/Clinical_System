import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import './App.css'
import axios from 'axios';
const Aform = () => {
  const [patients, setPatient] = useState([]);
  const [doctors, setDoctor] = useState([]);


  const [did, setDid] = useState(0);
  const [uid, setUid] = useState(0);
  const [a_reason, setA_reason] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  

  const addApoointmenthandler = async (e) => {
    e.preventDefault();
    const data = {
      did:did,
      uid:uid,
      a_reason:a_reason,
      date:date,
      time:time,
      contact_no:767677677,
      status:"pending"
    }
    console.log(data);
    await axios.post('http://localhost:5000/api/addTodo', data).then(() => {
      alert("Record Inserted successfully.....")
      
    })
  }
  useEffect(() => {
    getAllPatient();
    getAllDoctor();
   
  }, []);

  const getAllPatient = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user/');
    console.log(data);
    setPatient(data)
  }
  const getAllDoctor = async () => {
    const { data } = await axios.get('http://localhost:5000/api/doctor/');
    // const resData = await data.json();
    setDoctor(data)
  }
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
                <form  onSubmit={addApoointmenthandler}>
                  <h1>Appointment Form</h1><br></br>
                  <div class="flex flex-wrap formbold--mx-3">
                    <div class="w-full sm:w-half formbold-px-3">
                      <div class="formbold-mb-5 w-full">
                        <label for="date" class="formbold-form-label"> Doctor Name </label>
                        <select name='did' style={{ width: 250, height: 45, border: '1px gray', borderRadius: 5 }}
                        onChange={(e)=>setDid(e.target.value)}>
                          {
                            doctors.map(d => {
                              console.log(d);
                              return <option value={d.id}>{d.name}</option>
                            })
                          }
                        </select>
                      </div>
                    </div>
                    <div class="w-full sm:w-half formbold-px-3">

                      <div class="formbold-mb-5">
                        <label for="time" class="formbold-form-label"> patient Name </label>
                        <select name='uid' style={{ width: 250, height: 45, border: '1px gray', borderRadius: 5 }}
                         onChange={(e)=>setUid(e.target.value)}>

                          {
                            patients.map(p => {
                              console.log(p);
                              return<option value={p.id}>{p.full_name}</option>                            })
                          }
                        </select>
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
                          class="formbold-form-input"
                          onChange={(e)=>setDate(e.target.value)}
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