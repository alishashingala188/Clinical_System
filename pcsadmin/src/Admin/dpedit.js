import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Dsidebar'
import Nav from './Dnav'
import Footer from './Dfooter'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Dedit = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
    const [full_name, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [contact_no, setContact_no] = useState("");

    const { id } = useParams();
    let Navigate = useNavigate();
    useEffect(() => {
        const getPatient = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/user/${id}`);
             console.log(data);
            setFullname(data.data.user.full_name);
            setAddress(data.data.user.address);
            setContact_no(data.data.user.contact_no);
        }
        getPatient();
    }, [id]);
    const handlesubmit = async (e) => {
        e.preventDefault();
        const credential = {
            full_name: full_name,
            address: address,
            contact_no: contact_no
        }
        console.log(credential);
        const user = await axios.put(`http://localhost:5000/api/user/${id}`, credential)
                console.log(user);
                Navigate('/dviewpatient')
        
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
                                    <h1 className="h3 d-inline align-middle">Update Patient</h1>
                                </div>
                                <form onSubmit={handlesubmit}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">

                                            <div className="card">
                                                <div className="card-body">
                                                    <input type="text" className="form-control" name="full_name"
                                                        value={full_name} onChange={((e) => setFullname(e.target.value))} />
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-body">
                                                    <textarea rows="4" cols="50" className="form-control" name="address"
                                                        value={address} onChange={((e) => setAddress(e.target.value))}></textarea>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-body">
                                                    <input type="text" className="form-control" name="contact_no"
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