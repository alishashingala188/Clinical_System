import React from 'react'
import Dashboard from './Admin/Dashboard.js'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Profile from './Admin/Profile'
import AddDoctor from './Admin/AddDoctor.js'
import Chart from './Admin/Chart.js'
import ViewDoctor from './Admin/ViewDoctor'
 import ViewPatient from './Admin/ViewPatient'
 import Changepwd from './Admin/Changepwd'
 import Alogout from './Admin/Alogout'
 import Login from './Admin/Login'
 import ViewAppointment from './Admin/ViewAppointment'
 import Dedit from './Admin/Dedit';
 import Pedit from './Admin/Pedit'
 import Ddashboard from './Admin/Ddashboard'
import Dviewpatient from './Admin/DviewPatient'
const App = () => {
  return (
    <>
     <Router>
      <Routes>
            <Route path='/'  element={<Login />}  />
            <Route path='/dashboard'  element={<Dashboard />}  />
            <Route path='/ddashboard'  element={<Ddashboard />}  />
            <Route path='/Profile'  element={<Profile/>}/>
            <Route path='/AddDoctor'  element={<AddDoctor/>} />
            <Route path='/ViewDoctor'  element={<ViewDoctor/>}/>
            <Route path='/Chart'  element={<Chart/>} />
            <Route path='/ViewPatient'  element={<ViewPatient/>}/>
            <Route path='/dviewPatient'  element={<Dviewpatient/>}/>
            <Route path='/ViewAppointment'  element={<ViewAppointment/>} />
            <Route path='/Changepwd'  element={<Changepwd/>} />
            <Route path='/dedit/:id'  element={<Dedit/>} />
            <Route path='/pedit/:id'  element={<Pedit/>} />
            <Route path='/Alogout'   element={<Alogout/>}/>
       </Routes> 
       </Router>
    </>
  )
  
}

export default App