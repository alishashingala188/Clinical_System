import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import background from './images/blog1.jpg';
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
import { message } from "antd";
const Login = () => {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let Navigate = useNavigate();

  const onLogin = async () => {
    if(email == ""){
      message.error("Please fill up Email Id")
  }
  else if(password== ""){
    message.error("Please fill up Password ")
  }
  else{
    const credentials = {
      email: email,
      password: password
    };

    const data = await axios.post("http://localhost:5000/api/user/login", credentials)
      .then(async (res) => {
        await localStorage.setItem("token", res.data.data.token);
        message.success("Login sucessfully")
        Navigate('/dashboard')
      }).catch((err) => {
        message.error("username and password are wrong..")
      })
    }
  }
  return (
    <div >
      <Grid  >
        <Paper elevation={20} style={paperStyle}   >
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField label='Email Id' placeholder='Enter Email id' sx={{ mb: 2 }} fullWidth 
            onChange={(e) => setEmail(e.target.value)} />
          <TextField label='Password' placeholder='Enter password' sx={{ mb: 2 }} type='password' fullWidth 
            onChange={(e) => setPassword(e.target.value)} />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Link to='/resetpassword'>Forgot Password</Link>
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={onLogin}>Sign in</Button>
          <div>
            You have Create a Account  <Link to='/signup'>Sign up here</Link>
          </div>
        </Paper>

      </Grid>
    </div>
  )
}

export default Login