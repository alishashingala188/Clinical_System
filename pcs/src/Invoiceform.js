import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InvoiceItem from './InvoiceItem';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios'
const InvoiceForm = () => {
  const [patients, setPatient] = useState([]);
  const [doctors, setDoctor] = useState([]);

  const [uid, setUid] = useState(0)
  const [did, setDid] = useState(0)
  const [email, setEmail] = useState("")
  const [invoice_no, setInvoice_no] = useState("")
  const [room_cost, setRoom_cost] = useState(0)
  const [medician_cost, setMedician_cost] = useState(0)
  const [doctor_charge, setDoctor_charge] = useState(0)
  const [extra_charge, setExtra_charge] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [totle, setTotle] = useState(0)
  const [date, setDate] = useState()


  useEffect(() => {
    getAllPatient();
    getAllDoctor();
  }, [])

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


  const addBillHandler = async (e) => {
    e.preventDefault();
    const data = {
      did:did,
      uid:uid,
      email:email,
      date:date,
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
      alert("Bill are generated successfully.....")
    })
  }
  return (
    <Form ml={100} onSubmit={addBillHandler}>
      <Row>
        <Col md={8} lg={9} ml={10}>
          <Card className="p-4 p-xl-5 my-3 my-xl-4">
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
                }} onChange={(e) => setInvoice_no(e.target.value)} required="required" />
              </div>
            </div>
            <hr className="my-4" />
            <Row className="mb-5">
              {/* <Col>
                <Form.Label className="fw-bold">Bill to:</Form.Label>
                <Form.Control placeholder={"Who is this invoice to?"} rows={3} value={this.state.billTo} type="text" name="billTo" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required="required"/>
                <Form.Control placeholder={"Email address"} value={this.state.billToEmail} type="email" name="billToEmail" className="my-2" onChange={(event) => this.editField(event)} autoComplete="email" required="required"/>
                <Form.Control placeholder={"Billing address"} value={this.state.billToAddress} type="text" name="billToAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required="required"/>
              </Col> */}
              <Col>
                <Form.Label className="fw-bold">Patient Name:</Form.Label>
                <Form.Select placeholder="Who is this invoice from?" name="uid" className="my-2" required="required"
                  onChange={(e) => setUid(e.target.value)} >
                   {
                            patients.map(p => {
                              console.log(p);
                              return<option value={p.id}>{p.full_name}</option>                            })
                  }
                </Form.Select>
                <Form.Label className="fw-bold">Doctor Name:</Form.Label>
                <Form.Select placeholder={"Who is this invoice from?"} name="did" className="my-2" autoComplete="name" required="required"
                  onChange={(e) => setDid(e.target.value)} >
                  {
                    doctors.map(d => {
                      console.log(d);
                      return <option value={d.id}>{d.name}</option>
                    })
                  }
                </Form.Select>
                <Form.Control placeholder={"Email address"} type="email" name="email" className="my-2" autoComplete="email" required="required"
                onChange={(e) => setEmail(e.target.value)} />
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
                  <span className="fw-bold">Subtotal:
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
              <Button variant="primary" type="submit" className="d-block w-100">Review Invoice</Button>
         
          </Card>
        </Col> 
      </Row>
    </Form>)
}

export default InvoiceForm;
