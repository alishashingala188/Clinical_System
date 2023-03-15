import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import './App.css'
import axios from 'axios';
const Aform = () => {
  const [patients, setPatient] = useState([]);
  const [doctors, setDoctor] = useState([]);

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
                <form >
                  <h1>Appointment Form</h1>

                  <div class="flex flex-wrap formbold--mx-3">
                    <div class="w-full sm:w-half formbold-px-3">
                      <div class="formbold-mb-5 w-full">
                        <label for="date" class="formbold-form-label"> Doctor ID </label>
                        <select name='pid' style={{ width: 250, height: 45, border: '1px gray', borderRadius: 5 }}>
                          {
                            doctors.map(d => {
                              console.log(d);
                              return <option>{d.name}</option>
                            })
                          }
                        </select>
                      </div>
                    </div>
                    <div class="w-full sm:w-half formbold-px-3">

                      <div class="formbold-mb-5">
                        <label for="time" class="formbold-form-label"> patient ID </label>
                        <select name='pid' style={{ width: 250, height: 45, border: '1px gray', borderRadius: 5 }}>

                          {
                            patients.map(p => {
                              console.log(p);
                              return <option>{p.full_name} {p.id}</option>

                            })
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
                      name="areason"
                      id="id"
                      class="formbold-form-input"
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