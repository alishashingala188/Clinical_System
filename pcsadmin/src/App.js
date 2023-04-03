import React from 'react'
import Dashboard from './Admin/Dashboard.js'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Profile from './Admin/Profile'
import Dprofile from './Admin/dprofile'
import AddDoctor from './Admin/AddDoctor.js'
import Chart from './Admin/Chart.js'
import ViewDoctor from './Admin/ViewDoctor'
 import ViewPatient from './Admin/ViewPatient'
 import Changepwd from './Admin/Changepwd'
 import Alogout from './Admin/Alogout'
 import Login from './Admin/Login'
 import ViewAppointment from './Admin/ViewAppointment'
 import DviewAppointment from './Admin/dviewAppointment'
 import Dedit from './Admin/Dedit';
 import Pedit from './Admin/Pedit'
 import Dpedit from './Admin/dpedit'
 import Ddashboard from './Admin/Ddashboard'
 import Calender from './Admin/Calendar'
import Dviewpatient from './Admin/DviewPatient'
import Receptionist from './Admin/Addreceptionist'
import ChangeProfile from './Admin/changeprofile'
import DchangeProfile from './Admin/dchangeprofile'
const App = () => {
  return (
    <>
     <Router>
      <Routes>
            <Route path='/'  element={<Login />}  />
            <Route path='/dashboard'  element={<Dashboard />}  />
            <Route path='/ddashboard'  element={<Ddashboard />}  />
            <Route path='/Profile'  element={<Profile/>}/>
            <Route path='/dprofile'  element={<Dprofile/>}/>
            <Route path='/AddDoctor'  element={<AddDoctor/>} />
            <Route path='/ViewDoctor'  element={<ViewDoctor/>}/>
            <Route path='/Chart'  element={<Chart/>} />
            <Route path='/ViewPatient'  element={<ViewPatient/>}/>
            <Route path='/dviewPatient'  element={<Dviewpatient/>}/>
            <Route path='/calander'  element={<Calender/>} />
            <Route path='/Changepwd'  element={<Changepwd/>} />
            <Route path='/dedit/:id'  element={<Dedit/>} />
            <Route path='/pedit/:id'  element={<Pedit/>} />
            <Route path='/dpedit/:id'  element={<Dpedit/>} />
            <Route path='/Alogout'   element={<Alogout/>}/>
            <Route path='/viewappointment'   element={<ViewAppointment/>}/>
            <Route path='/dviewappointment'   element={<DviewAppointment/>}/>
            <Route path='/addReceptionist'   element={<Receptionist/>}/>
            <Route path='/changeprofile/:id'   element={<ChangeProfile/>}/>
            <Route path='/dchangeprofile/:id'   element={<DchangeProfile/>}/>



       </Routes> 
       </Router>
    </>
  )
  
}

export default App