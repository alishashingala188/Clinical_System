import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
const AddDoctor = ({ history }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }
  })
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [address, setAddress] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("")
  const [clinic_name, setClinic_name] = useState("");
  const [education, setEducation] = useState("");
  const [time, setTime] = useState("");
  const [available_day, setAvailable_day] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState('doctor')
  const [isActive, setIsactive] = useState('yes');
  const Navigate = useNavigate()

  const addDoctorhandler = async (e) => {
    e.preventDefault();

    if (name === '' || username === "") {
      message.error("Please fill up name & username")
    }
    
    else if (password.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
      message.error("Please fill password Using one uppercase,one lower case and special chracter and digit greter then 8 char.")
    }
    else if(contact_no.match(10)){
      message.error("Contact no must be 10 char.")

    }
    else if(address === ""){
      message.error("Please fill up Address")
    }
   
    else if(email === "" || email.search( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      message.error("Please Email Id must be strig,digit and @ include ")
    }
    else {
      const formdata = new FormData()
      formdata.append('name', name)
      formdata.append('username', username)
      formdata.append('password', password)
      formdata.append('contact_no', contact_no)
      formdata.append('address', address)
      formdata.append('speciality', speciality)
      formdata.append('email', email)
      formdata.append('gender', gender)
      formdata.append('clinic_name', clinic_name)
      formdata.append('education', education)
      formdata.append('type', type)
      formdata.append('time', time)
      formdata.append('available_day', available_day)
      formdata.append('image', image)
      formdata.append('isActive', isActive)

      await axios.post('http://localhost:5000/api/doctor/addDoctor', formdata)
        .then(() => {
          message.success("record inserted..")

        })
        // .catch(() => {
        //   message.error("Enter valid data...")
        // })
    }
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

                <div className="mb-3">
                  <h1 className="h3 d-inline align-middle">Add Doctor</h1>
                </div>
                <form onSubmit={addDoctorhandler} method="post" encType='multipart/form-data'>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="card">

                        <div className="card-body">

                          <input type="text" className="form-control" placeholder="Doctor name" name="name"
                            onChange={(e) => setName(e.target.value)} />
                        </div>
                      </div>
                      <div className="card">

                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="Enter Username" name="username"
                            onChange={(e) => setUsername(e.target.value)} />
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <input type="password" className="form-control" placeholder="Enter password" name="password"
                            onChange={(e) => setPassword(e.target.value)} />
                        </div>
                      </div>

                      <div className="card">

                        <div className="card-body">
                          <input type="number" className="form-control" placeholder="Contact No" name="contact_no"
                            onChange={(e) => setContact_no(e.target.value)}  />
                        </div>
                      </div>


                      <div className="card">

                        <div className="card-body">
                          <textarea rows="4" cols="50" className="form-control" placeholder="Address" name="address"
                            onChange={(e) => setAddress(e.target.value)} ></textarea>
                        </div>
                      </div>

                      <div className="card">

                        <div className="card-body">
                          <select className="form-control" rows="1" placeholder="Speciality" name="speciality"
                            onChange={(e) => setSpeciality(e.target.value)} >
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

                      <div className="card">

                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="Email" name="email"
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          Select Gender ::
                          <br />
                          <input type="radio" name="gender" id="male" onChange={(e) => setGender(e.target.value)} value="male" />
                          <label for="male">Male</label><br />
                          <input type="radio" name="gender" id="female" onChange={(e) => setGender(e.target.value)} value="female" />
                          <label for="female">Female</label>
                        </div>
                      </div>

                      <div className="card">

                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="Clinic name" name="clinic_name"
                            onChange={(e) => setClinic_name(e.target.value)} value={clinic_name} />
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <input type="file" className="form-control" name="image" size="lg"
                            onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="Education" name="education"
                            onChange={(e) => setEducation(e.target.value)} value={education} />
                        </div>
                      </div>

                      <div className="card">

                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="time" name="time"
                            onChange={(e) => setTime(e.target.value)} value={time} />
                        </div>
                      </div>

                      <div className="card">

                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="Available day" name="available_day"
                            onChange={(e) => setAvailable_day(e.target.value)} value={available_day} />
                        </div>
                      </div>

                      <div className="card">
                        <button className="btn btn-primary" type='submit'>Insert Doctor</button>
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