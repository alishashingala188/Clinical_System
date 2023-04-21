import React, { useState, useEffect } from 'react'
import './css/profile.css'
import axios from 'axios';
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { Link } from 'react-router-dom';


import { useParams } from 'react-router-dom'
const Viewmore = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);
    console.log(doctor);
    useEffect(() => {
        const getdoctor = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/doctor/${id}`);
            setDoctor(data.data.user);
        }
        getdoctor();
    }, [id]);
    return (
        <>
            <div class="wrapper">
                <Sidebar />
                <div class="wrapper">
                    <div class="main">
                        <Nav />
                        <main class="content">
                            <div class="container-fluid p-0"></div>

                            <div className="mb-3">
                            </div>
                            <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
                                <MDBContainer className="py-5 h-100" style={{ width: '1600px', heigth: "500px" ,marginTop:"-50px"}}>
                                    <MDBRow className="h-300" style={{ width: '1700px', marginLeft: "50px", height: "500px" }}>
                                        <MDBCol lg="6" className="mb-4 mb-lg-0">
                                            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                                <MDBRow className="g-0">
                                                    <MDBCol md="4" className="gradient-custom text-center text-white"
                                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                                        <MDBCardImage src={'http://localhost:5000/' + doctor.image}
                                                            alt="Avatar" className="my-5" style={{ width: '150px', heigth: "150px", borderRadius: '50%' }} />
                                                        <MDBTypography tag="h2" style={{ color: 'white' }}>{doctor.name}</MDBTypography>
                                                        <MDBCardText><h4 style={{ color: 'white', marginBottom: "100px" }}>{doctor.speciality}</h4></MDBCardText>

                                                    </MDBCol>
                                                    <MDBCol md="8">
                                                        <MDBCardBody className="p-4" style={{ width: "500px" }}>
                                                            <MDBTypography tag="h6">Personal Information</MDBTypography>
                                                            <hr className="mt-0 mb-4" />
                                                            <MDBRow className="pt-1">
                                                                <MDBCol size="6" className="mb-3">
                                                                    <MDBTypography tag="h6">Email</MDBTypography>
                                                                    <MDBCardText className="text-muted">{doctor.email}</MDBCardText>
                                                                </MDBCol>
                                                                <MDBCol size="3" className="mb-3">
                                                                    <MDBTypography tag="h6">Phone</MDBTypography>
                                                                    <MDBCardText className="text-muted">{doctor.contact_no}</MDBCardText>
                                                                </MDBCol>
                                                                <MDBCol size="3" className="mb-3">
                                                                    <MDBTypography tag="h6">Address</MDBTypography>
                                                                    <MDBCardText className="text-muted">{doctor.address}</MDBCardText>
                                                                </MDBCol>
                                                            </MDBRow>
                                                            <br />
                                                            <br />
                                                            <MDBTypography tag="h6">Education Information</MDBTypography>
                                                            <hr className="mt-0 mb-4" />
                                                            <MDBRow className="pt-1">
                                                                <MDBCol size="3" className="mb-3">
                                                                    <MDBTypography tag="h6">Education</MDBTypography>
                                                                    <MDBCardText className="text-muted">{doctor.education}</MDBCardText>
                                                                </MDBCol>
                                                                <MDBCol size="3" className="mb-3">
                                                                    <MDBTypography tag="h6">Clinic name</MDBTypography>
                                                                    <MDBCardText className="text-muted">{doctor.clinic_name}</MDBCardText>
                                                                </MDBCol>
                                                                <MDBCol size="3" className="mb-3">
                                                                    <MDBTypography tag="h6">Time</MDBTypography>
                                                                    <MDBCardText className="text-muted">{doctor.time}</MDBCardText>
                                                                </MDBCol>
                                                                <MDBCol size="3" className="mb-3">
                                                                    <MDBTypography tag="h6">Availble day</MDBTypography>
                                                                    <MDBCardText className="text-muted">{doctor.available_day}</MDBCardText>
                                                                </MDBCol>
                                                            </MDBRow>
<br/>
                                                            <td><Link to={`/appointment/${doctor.id}`} className='btn btn-primary' style={{backgroundColor:"#1148c3",marginLeft:"100px"}}><BookOnlineIcon />Book Appointment </Link></td>

                                                        </MDBCardBody>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </section>


                        </main>
                        <Footer />
                    </div>
                </div >
            </div >        </>
    )
}

export default Viewmore