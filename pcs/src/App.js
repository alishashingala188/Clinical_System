import React from 'react'
import Main from './Main'
import Form from './Form'
import Login from './Login'
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Footer from './Footer';
import Doctor from './Doctor';
import Aform from './Aform';
import Contact from './Contact'
import Feedback from './Feedback'
import Rdashboard from './Rdashboard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import InvoiceForm from './Invoiceform'
import Payment from './payment_system'
import Rviewpatine from './rviewpatient'
import Bill from './Bill'
import Rlogin from './Rlogin'
import ViewAppointment from './ViewAppointment'
import Profile from './profile'
import Rprofile from './Rprofile'
import RviewAppointment from './Rviewappointment'
import Changeprofile from './changeprofile'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Form />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/nav' element={<Nav />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/doctor' element={<Doctor/>}/>
          <Route path='/appointment' element={<Aform/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/Rdashboard' element={<Rdashboard/>}/>
          <Route path='/invoiceForm/:id' element={<InvoiceForm/>}/>
          <Route path='/changeprofile/:id' element={<Changeprofile/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/rviewpatient' element={<Rviewpatine/>}/>
          <Route path='/bill' element={<Bill/>}/>
          <Route path='/rlogin' element={<Rlogin/>}/>
          <Route path='/viewappointment' element={<ViewAppointment/>}/>
          <Route path='/rviewappointment' element={<RviewAppointment/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/rprofile' element={<Rprofile/>}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App