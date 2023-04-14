import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import background from './images/blog1.jpg';
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
import { message } from "antd";
const Resetpassword = () => {
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
  const [email, setEmail] = useState('');


  const onchangeHandler=(e)=>{
    setEmail({...email,[e.target.name]:e.target.value});
  }
    const ResetPassword = async(e)=>{
      await axios.post('http://localhost:5000/api/user/sendpasswordlink',email)
    .then(async(res)=>{
      await localStorage.setItem("token", res.data.data.token);
      setEmail('');
      alert('done')
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div >
      <Grid  >
        <Paper elevation={20} style={paperStyle}   >
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar><br/>
            <h2> Reset password </h2>
          </Grid>
         <br/> <br/>
          <TextField label='Email' placeholder='Enter Email Id' sx={{ mb: 2 }} type='email' fullWidth required
           name="email" onChange={onchangeHandler} />
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
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={ResetPassword}>Submit</Button>
          
        </Paper>

      </Grid>
    </div>
  )
}

export default Resetpassword