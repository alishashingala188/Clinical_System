import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddDoctor = ({ history }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [address, setAddress] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [cname,setCname]=useState("");
  const [education,setEducation]=useState("");


  const Navigate = useNavigate()

  const addDoctorhandler = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      username: username,
      password: password,
      contact_no: contact_no,
      address: address,
      speciality: speciality,
      email: email,
      gender: gender,
      clinic_name: cname,
      education: education,
      type: "doctor"
    }
    console.log(data);
    await axios.post('http://localhost:5000/api/doctor/addDoctor', data).then(() => {

      alert("Record Inserted successfully.....")

    })
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

                <div class="mb-3">
                  <h1 class="h3 d-inline align-middle">Add Doctor</h1>
                </div>
                <form onSubmit={addDoctorhandler}>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="card">
                        <div class="card-body">

                          <input type="text" class="form-control" placeholder="Doctor name" name="name"
                            onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                      </div>
                      <div class="card">

                        <div class="card-body">
                          <input type="text" class="form-control" placeholder="Enter Username" name="username"
                            onChange={(e) => setUsername(e.target.value)} value={username} />
                        </div>
                      </div>

                      <div class="card">

                        <div class="card-body">
                          <input type="password" class="form-control" placeholder="Enter password" name="password"
                            onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                      </div>

                      <div class="card">

                        <div class="card-body">
                          <input type="number" class="form-control" placeholder="Contact No" name="contact_no"
                            onChange={(e) => setContact_no(e.target.value)} value={contact_no} />
                        </div>
                      </div>


                      <div class="card">

                        <div class="card-body">
                          <textarea rows="4" cols="50" class="form-control" placeholder="Address" name="address"
                            onChange={(e) => setAddress(e.target.value)} value={address} ></textarea>
                        </div>
                      </div>

                      <div class="card">

                        <div class="card-body">
                          <select class="form-control" rows="1" placeholder="Speciality" name="speciality"
                            onChange={(e) => setSpeciality(e.target.value)} value={speciality}>
                            <option >--Select speciality--</option>
                            <option>Eye Speciality</option>
                            <option>Dentist specialist</option>
                            <option>Allergist</option>
                            <option>Cardiologist</option>
                            <option>Heart specialist </option>
                            <option>Skin specialist</option>
                            <option>neurologist specialist</option>

                          </select>
                        </div>
                      </div>

                      <div class="card">

                        <div class="card-body">
                          <input type="text" class="form-control" placeholder="Email" name="email"
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                      </div>
                      <div class="card">

                        <div class="card-body">
                          Select Gender ::
                          <br />
                          <input type="radio" name="gender" id="male" onChange={(e) => setGender(e.target.value)} value="male" />
                          <label for="male">Male</label><br />
                          <input type="radio" name="gender" id="female" onChange={(e) => setGender(e.target.value)} value="female" />
                          <label for="female">Female</label>
                        </div>
                      </div>

                      <div class="card">

                        <div class="card-body">
                          <input type="text" class="form-control" placeholder="Clinic name" name="clinic_name"
                            onChange={(e) => setCname(e.target.value)} value={cname} />
                        </div>
                      </div>
                      <div class="card">

                        <div class="card-body">
                          <input type="text" class="form-control" placeholder="Education" name="education"
                            onChange={(e) => setEducation(e.target.value)} value={education} />
                        </div>
                      </div>
                      <div class="card">
                        <button class="btn btn-primary" type='submit'>Insert Doctor</button>
                      </div>

                    </div>
                  </div>
                </form>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>



    </>
  )
}

export default AddDoctor