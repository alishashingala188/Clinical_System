import React from 'react'
import Main from './Main'
import Form from './Form'
import Login from './Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Form />} />
          <Route path='/signin' element={<Login />} />

        </Routes>
      </Router>
    
    </div>
  )
}

export default App