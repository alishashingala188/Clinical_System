import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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
  const [email, setEmail] = useState("");
  const addReceptionisthandler = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      username: username,
      password: password,
      contact_no: contact_no,
      email: email
    }
    console.log(data);
    await axios.post('http://localhost:5000/api/rece/addrece', data).then(() => {
      alert("Record Inserted successfully.....")
    })
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
                  <h1 className="h3 d-inline align-middle">Add receptionist</h1>
                </div>
                <form onSubmit={addReceptionisthandler}>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="card">
                        <div className="card-body">

                          <input type="text" className="form-control" placeholder="receptionist name" name="name"
                            onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                      </div>
                      <div className="card">

                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="Enter Username" name="username"
                            onChange={(e) => setUsername(e.target.value)} value={username} />
                        </div>
                      </div>

                      <div className="card">

                        <div className="card-body">
                          <input type="password" className="form-control" placeholder="Enter password" name="password"
                            onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                      </div>

                      <div className="card">

                        <div className="card-body">
                          <input type="number" className="form-control" placeholder="Contact No" name="contact_no"
                            onChange={(e) => setContact_no(e.target.value)} value={contact_no} />
                        </div>
                      </div>


                      <div className="card">

                        <div className="card-body">
                          <input type="text" className="form-control" placeholder="Email" name="email"
                            onChange={(e) => setEmail(e.target.value)} value={email} />
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