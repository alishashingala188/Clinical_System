import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { message } from 'antd';

const InvoiceForm = () => {
  const [doctors, setDoctor] = useState([]);
  const [patient, setPatient] = useState([]);

  const [uid, setUid] = useState(0)
  const [did, setDid] = useState(0)
  const [invoice_no, setInvoice_no] = useState("")
  const [room_cost, setRoom_cost] = useState(0)
  const [medician_cost, setMedician_cost] = useState(0)
  const [doctor_charge, setDoctor_charge] = useState(0)
  const [extra_charge, setExtra_charge] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [totle, setTotle] = useState(0)
  const [date, setDate] = useState()
  const { id} = useParams();
  useEffect(() => {
     getAllAppoitment();
    // getAllDoctor();
  }, [])

  const getAllAppoitment = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/${id}`)
    setPatient(data.data.user.patients);
    setDoctor(data.data.user.users);
   
    // console.log(data);
    // setAppointment(data)
  }
  const addBillHandler = async (e) => {
    e.preventDefault();
    const data = {
      uid:patient.id,
      did:doctors.id,
      date:date,
      email:"abc@gmail.com",
      room_cost:room_cost,
      invoice_no:invoice_no,
      medician_cost:medician_cost,
      doctor_charge:doctor_charge,
      extra_charge:extra_charge,
      discount:discount,
      totle:parseInt(medician_cost)+parseInt(doctor_charge)+parseInt(room_cost)+parseInt(extra_charge)-parseFloat(discount*100/100)
    }
    console.log(data);
    await axios.post('http://localhost:5000/api/bill/addbill', data).then(() => {
     message.success("Bill Generated successfully...")
    }).catch((err)=>{
      message.error("error",err)
    
    })
  }
  var i=0;
  return (
    <Form ml={200} onSubmit={addBillHandler} style={{marginLeft:220}}>
      <Row>
        <Col md={8} lg={9} ml={10}>
         
          <Card className="p-4 p-xl-5 my-3 my-xl-4" >
          <div style={{backgroundColor:'#71b7e6',height:50,marginTop:-40,width:760,marginLeft:-50,marginBottom:20}}></div>
            <div className="d-flex flex-row align-items-start justify-content-between mb-3">
              <div class="d-flex flex-column">
                <div className="d-flex flex-column">
                  <div class="mb-2">
                    <span className="fw-bold">Current&nbsp;Date:&nbsp;</span>
                    <span className="current-date">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold d-block me-2">Due&nbsp;Date:</span>
                  <Form.Control type="date" name={"dateOfIssue"} style={{
                    maxWidth: '150px'
                  }} onChange={(e) => setDate(e.target.value)} required="required" />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <span className="fw-bold me-2">Invoice&nbsp;Number:&nbsp;</span>
                <Form.Control type="number" min="1" style={{
                  maxWidth: '70px'
                }}  onChange={(e) => setInvoice_no(e.target.value)} required="required" />
              </div>
            </div>
            <hr className="my-4" />
            <Row className="mb-5">
              <Col>
                <Form.Label className="fw-bold">Patient Name:</Form.Label>
                <Form.Control placeholder="Who is this invoice from?" name="uid" className="my-2" required="required" value={patient.full_name} 
                 />      

                <Form.Label className="fw-bold">Doctor Name:</Form.Label>
                <Form.Control placeholder={"Who is this invoice from?"} name="did" className="my-2"  required="required" value={doctors.name}
                >

                </Form.Control>
                <Form.Control placeholder={"Room Cost"} type="number" name="email" className="my-2" autoComplete="email" required="required" 
                 onChange={(e) => setRoom_cost(e.target.value)}/>

                <Form.Control placeholder={"Medician cost"} type="number" name="email" className="my-2" autoComplete="email" required="required" 
                 onChange={(e) => setMedician_cost(e.target.value)}/>

                <Form.Control placeholder={"Doctor Charge"} type="number" name="email" className="my-2" autoComplete="email" required="required" 
                 onChange={(e) => setDoctor_charge(e.target.value)}/>

                <Form.Control placeholder={"Extra Charge"} type="number" name="email" className="my-2" autoComplete="email" required="required" 
                 onChange={(e) => setExtra_charge(e.target.value)}/>

                <Form.Control placeholder={"Discount"} type="number" name="email" className="my-2" autoComplete="email" required="required" 
                 onChange={(e) => setDiscount(e.target.value)}/>

              </Col>
            </Row>
            <Row className="mt-4 justify-content-end">
              <Col lg={6}>
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <span className="fw-bold">Subtotal:{parseInt(medician_cost)+parseInt(doctor_charge)+parseInt(room_cost)+parseInt(extra_charge)}
                  </span>
                  <span>
                  </span>
                </div>
                <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                  <span className="fw-bold">Discount:{discount}</span>
                  <span>
                    <span className="small "></span>
                  </span>
                </div>
               
                <hr />
                <div className="d-flex flex-row align-items-start justify-content-between" style={{
                  fontSize: '1.125rem'
                }}>
                  <span className="fw-bold">Total:{parseInt(medician_cost)+parseInt(doctor_charge)+parseInt(room_cost)+parseInt(extra_charge)-parseFloat(discount*100/100)}
                  </span>
                  <span className="fw-bold">
                  </span>
                </div>
              </Col>
            </Row>
            <hr className="my-4" />
              <Button variant="primary" type="submit" className="d-block w-100 height-50">Review Invoice</Button>
          </Card>
        </Col> 
      </Row>
    </Form>)
}

export default InvoiceForm;
