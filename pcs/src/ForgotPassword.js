import React, { useState,useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import background from './images/blog1.jpg';
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
const Forgotpassword = () => {
  const paperStyle = { padding: 20, height: '75vh', width: 400, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  const main = {
    backgroundImage: `url(${background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#03A9F4'
  }   
  const { id, token } = useParams();
  
  const [password,setPassword]=useState('');
  const [message, setMessage] = useState("");
  useEffect(() => {
      validUser(); 
  }, []);
  const changeHandler=(e)=>{
      setPassword({...password,[e.target.name]:e.target.value});
}

const validUser=async ()=>{
  const data = axios.get(`http://localhost:5000/api/user/forgotpassword/${id}/${token}`)
.then(()=>{
  console.log("user valid")
})
 .catch(()=>{
  console.log(" no user valid")
 })
}
  const Forgotpassword=async(e)=>{
      
      const data=axios.post(`http://localhost:5000/api/user/${id}/${token}`,password)
          .then(()=>{
              console.log("done")
              setPassword("");
              setMessage(true);
          }).catch(()=>{
              console.log('wrong')
          })          
          }
  return (
    <div >
      <Grid  >
        <Paper elevation={20} style={paperStyle}   >
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar><br/>
            <h2> Reset password </h2>
            {message ? <p style={{ color: "green", fontWeight: "bold" }}>Password Succesfulyy Update </p> : ""}

          </Grid>
         <br/> <br/>
          <TextField label='New Password' placeholder='Enter new password' sx={{ mb: 2 }} type='password' fullWidth required
            onChange={changeHandler} name='password'/>
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
           <br/> <br/>
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={Forgotpassword}>Submit</Button>
          
        </Paper>

      </Grid>
    </div>
  )
}

export default Forgotpassword