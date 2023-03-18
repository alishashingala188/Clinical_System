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
          <Route path='/aform' element={<Aform/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/Rdashboard' element={<Rdashboard/>}/>
          <Route path='/invoiceForm' element={<InvoiceForm/>}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App