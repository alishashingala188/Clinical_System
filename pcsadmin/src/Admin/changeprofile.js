import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Dedit = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [contact_no, setContact_no] = useState("");
    const { id } = useParams();
    let Navigate = useNavigate();
    useEffect(() => {
        const getdoctor = async () => {
            const {data} = await axios.get(`http://localhost:5000/api/admin/${id}`);
          // console.log(data);
            setName(data.data.user.name);
            setUsername(data.data.user.username);
            setContact_no(data.data.user.contact_no);
        }
        getdoctor();
    }, [id]); 
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const credential={
            name:name,
            username:username,
            contact_no:contact_no
        }
        console.log(credential);
     const user=await axios.put(`http://localhost:5000/api/admin/${id}`,credential)
    
        console.log(user);
         Navigate('/profile')
  
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
                                    <h1 className="h3 d-inline align-middle">Update Doctor</h1>
                                </div>
                                <form onSubmit={handlesubmit}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <input type="text" className="form-control" name="name"
                                                        value={name} onChange={((e) => setName(e.target.value))} />
                                                </div>
                                            </div>
                                            <div className="card">

                                                <div className="card-body">
                                                    <input type="text" className="form-control" placeholder="Enter Username" name="username"
                                                        value={username} onChange={((e) => setUsername(e.target.value))} />
                                                </div>
                                            </div>
                                           

                                            <div className="card">

                                                <div className="card-body">
                                                    <input type="text" className="form-control" placeholder=" contact_no" name="contact_no"
                                                        value={contact_no} onChange={((e) => setContact_no(e.target.value))} />
                                                </div>
                                            </div>

                                            <div className="card">
                                                <button className="btn btn-primary" type='submit'>Update Doctor</button>
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
export default Dedit