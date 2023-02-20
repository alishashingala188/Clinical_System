import React from 'react'
import Dashboard from './Admin/Dashboard.js'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Profile from './Admin/Profile'
import AddClinic from './Admin/AddClinic'
import AddDoctor from './Admin/AddDoctor.js'
import AddMedical from './Admin/AddMedical'
import AddMedicine from './Admin/AddMedicine'
import AddReceptionist from './Admin/AddReceptionist'
import  ViewMedicine from './Admin/ViewMedicine'
 import ViewReceptionist from './Admin/ViewReceptionist'
 import ViewDoctor from './Admin/ViewDoctor'
 import Changepwd from './Admin/Changepwd'
 import Alogout from './Admin/Alogout'
const App = () => {
  return (
    <>
     <Router>
      <Routes>
            <Route path='/'  element={<Dashboard />}  />
            <Route path='/Profile'  element={<Profile/>}/>
            <Route path='/AddClinic'  element={<AddClinic/>} />
            <Route path='/AddDoctor'  element={<AddDoctor/>} />
            <Route path='/AddMedical'  element={<AddMedical/>}/>
            <Route path='/AddMedicine'  element={<AddMedicine/>} />
            <Route path='/AddReceptionist'  element={<AddReceptionist/>}/>
            <Route path='/ViewMedicine'  element={<ViewMedicine/>} />
            <Route path='/ViewReceptionist'   element={<ViewReceptionist/>}/>
            <Route path='/ViewDoctor'  element={<ViewDoctor/>} />
            <Route path='/Changepwd'  element={<Changepwd/>} />
            <Route path='/Alogout'   element={<Alogout/>}/>
            </Routes> 
       </Router>
    </>
  )
  
}

export default App