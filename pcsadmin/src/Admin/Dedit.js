import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Dedit = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [clinic_name, setClinic_name] = useState("");

    const { id } = useParams();
    let Navigate = useNavigate();

    useEffect(() => {
        const getdoctor = async () => {
            const {data} = await axios.get(`http://localhost:5000/api/doctor/${id}`);
          // console.log(data);
            setName(data.data.user.name);
            setUsername(data.data.user.username);
            setAddress(data.data.user.address);
            setClinic_name(data.data.user.clinic_name);
        }
        getdoctor();
    }, [id]);

    
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const credential={
            name:name,
            username:username,
            address:address,
            clinic_name:clinic_name
        }
        console.log(credential);
     const user=await axios.put(`http://localhost:5000/api/doctor/${id}`,credential);
     console.log(user);
Navigate('/ViewDoctor')
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
                                <form onSubmit={handlesubmit}>
                                    <div class="row">
                                        <div class="col-12 col-lg-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <input type="text" class="form-control" name="name"
                                                        value={name} onChange={((e) => setName(e.target.value))} />
                                                </div>
                                            </div>
                                            <div class="card">

                                                <div class="card-body">
                                                    <input type="text" class="form-control" placeholder="Enter Username" name="username"
                                                        value={username} onChange={((e) => setUsername(e.target.value))} />
                                                </div>
                                            </div>
                                            <div class="card">

                                                <div class="card-body">
                                                    <textarea rows="4" cols="50" class="form-control" placeholder="Address" name="address"
                                                        value={address} onChange={((e) => setAddress(e.target.value))}></textarea>
                                                </div>
                                            </div>

                                            <div class="card">

                                                <div class="card-body">
                                                    <input type="text" class="form-control" placeholder="Clinic name" name="clinic_name"
                                                        value={clinic_name} onChange={((e) => setClinic_name(e.target.value))} />
                                                </div>
                                            </div>

                                            <div class="card">
                                                <button class="btn btn-primary" type='submit'>Update Doctor</button>
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