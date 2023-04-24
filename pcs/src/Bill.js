import { useState, useEffect } from 'react'
import React from 'react'
import './Info.css'
import image from './14.jpg'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { BiCloudDownload } from 'react-icons/bi'
import './bill.css'
import { Link } from 'react-router-dom'


function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
const Dprofile = () => {
    const [bill, setBill] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [name, setName] = useState(admin.full_name)
    const [amount, setAmount] = useState(bill.totle)
    useEffect(() => {
        getAllBill();
        getAllAdmin();
    }, []);
    //console.log("hello ", bill)

    const getAllBill = async () => {
        const data = await axios.get(`http://localhost:5000/api/user/viewbill`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer ' + localStorage.getItem("token")
                }
            }).then((res) => {
                setBill(res.data.data)
                console.log(res.data.data)
            })
    }
    const getAllAdmin = async (req) => {
        const data = await axios.get(`http://localhost:5000/api/user/profile`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer ' + localStorage.getItem("token")
                }
            }).then((res) => {
                setAdmin(res.data.data.user)
                console.log(res.data.data.user)
            })
    }
    
    function GenerateInvoice() {
        html2canvas(document.querySelector("#invoice")).then((canvas) => {
            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'pt',
                format: [612, 792]
            });
            pdf.internal.scaleFactor = 1;
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('invoice-001.pdf');
        });
    }

    //payment system
    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
            t.json()
        )

        console.log(data)

        const options = {
            key: document.domain === 'localhost' ? 'rzp_test_QTuO1fvgzMpvEy' : 'PRODUCTION_KEY',
            currency: data.currency,
            amount: amount,
            order_id: data.id,
            name: 'Payment',
            description: 'Thank you for nothing. Please give us some money',

            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
            },
            prefill: {
                name,
                amount,
                email: 'sem3a.67.tmtbca@gmail.com',
                phone_number: '7069582962'
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }
    return (
        <>
            <div className="wrapper">
                <Sidebar />
                <div className="wrapper">
                    <div className="main">
                        <Nav />
                        <main className="content">

                            <div id="invoice">
                                <div className="invoice overflow-auto">
                                    <div style={{ minWidth: '200px' }}>
                                        <header style={{ backgroundColor: '#3989c6', color: "white" }}>
                                            <div className="row">
                                                <div className="col">
                                                </div>
                                                <div className="col company-details">
                                                    <h1 style={{ color: 'white' }}>{admin.full_name}</h1>
                                                    <div>{admin.address}</div>
                                                    <div>{admin.contact_no}</div>
                                                    <div>{admin.email}</div>
                                                </div>
                                            </div>
                                        </header>
                                        <main >
                                            <div className="row contacts">
                                                <div className="col invoice-to">
                                                    <div className="text-gray-light">INVOICE TO:</div>
                                                    <h2 className="to">John Doe</h2>
                                                    <div className="address">796 Silver Harbour, TX 79273, US</div>
                                                    <div className="email"><a href="mailto:john@example.com">john@example.com</a></div>
                                                </div>
                                                <div className="col invoice-details">
                                                    <h1 className="invoice-id">INVOICE 3-2-1</h1>
                                                    <div className="date">Date of Invoice: 01/10/2018</div>
                                                    <div className="date">Due Date: 30/10/2018</div>
                                                </div>
                                            </div>
                                            <table border="0" cellspacing="10" cellpadding="10">
                                                <thead>
                                                    <tr>
                                                        <th className="text-left">Index</th>
                                                        <th className="text-left">DESCRIPTION</th>
                                                        <th className="text-right">PRICE</th>
                                                        <th className="text-right">TOTAL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="no">01</td>
                                                        <td className="text-left">
                                                            <h3>Medician cost</h3> This is Paperless clinical system Medician cost
                                                        </td>

                                                        {
                                                            Array.isArray(bill)
                                                                ? bill.map(d => {
                                                                    return (
                                                        <>
                                                            <td className="unit" style={{ width: 150 }}>{d.medician_cost}</td>
                                                            <td className="total">{d.medician_cost}</td>
                                                            </>
                                                                    )
                                                                })
                                                                : null}

                                                    </tr>
                                                    <tr>
                                                        <td className="no">02</td>
                                                        <td className="text-left">
                                                            <h3>Room cost</h3> This is Paperless clinical system room cost
                                                        </td>
                                                        {
                                                            Array.isArray(bill)
                                                                ? bill.map(d => {
                                                                    return (
                                                                        <>
                                                                            <td className="unit" style={{ width: 150 }}>{d.room_cost}</td>
                                                                            <td className="total">{d.room_cost}</td>
                                                                        </>
                                                                    )
                                                                })
                                                                : null}
                                                    </tr>

                                                    <tr>
                                                        <td className="no">03</td>
                                                        <td className="text-left">
                                                            <h3>Doctor Charge</h3> This is Paperless clinical system doctor charge
                                                        </td>
                                                        {
                                                            Array.isArray(bill)
                                                                ? bill.map(d => {
                                                                    return (
                                                                        <>
                                                                            <td className="unit" style={{ width: 150 }}>{d.doctor_charge}</td>
                                                                            <td className="total">{d.doctor_charge}</td>
                                                                        </>
                                                                    )
                                                                })
                                                                : null}
                                                    </tr>

                                                    <tr>
                                                        <td className="no">04</td>
                                                        <td className="text-left">
                                                            <h3>Extra Charge</h3> This is Paperless clinical system extra charge
                                                        </td>
                                                        {
                                                            Array.isArray(bill)
                                                                ? bill.map(d => {
                                                                    return (
                                                                        <>
                                                                            <td className="unit" style={{ width: 150 }}>{d.extra_charge}</td>
                                                                            <td className="total">{d.extra_charge}</td>
                                                                        </>
                                                                    )
                                                                })
                                                                : null}
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="2"></td>
                                                        <td colspan="2">SUBTOTAL</td>
                                                        <td>{
                                                            Array.isArray(bill)
                                                                ? bill.map(d => {
                                                                    return (
                                                                        <>
                                                                            {d.medician_cost + d.doctor_charge + d.room_cost + d.extra_charge}
                                                                        </>
                                                                    )
                                                                })
                                                                : null}</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2"></td>
                                                        <td colspan="2">DISCOUNT 10%</td>
                                                        <td>{
                                                            Array.isArray(bill)
                                                                ? bill.map(d => {
                                                                    return (
                                                                        <>
                                                                            {d.discount}
                                                                        </>
                                                                    )
                                                                })
                                                                : null}</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2"></td>
                                                        <td colspan="2">GRAND TOTAL</td>
                                                        <td>{
                                                            Array.isArray(bill)
                                                                ? bill.map(d => {
                                                                    return (
                                                                        <>
                                                                            {d.totle}
                                                                        </>
                                                                    )
                                                                })
                                                                : null}</td>
                                                    </tr>
                                                </tfoot>

                                            </table>
                                            <div className="thanks">Thank you!</div>

                                        </main>
                                        <div className="text-right">
                                            <button className="btn btn-info" onClick={displayRazorpay}><i className="fa fa-money"></i><a>Payment</a> </button>
                                            <button className="btn btn-info" onClick={GenerateInvoice} ><i className="fa fa-file-pdf-o"></i><BiCloudDownload /> Download PDF</button>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}




export default Dprofile;