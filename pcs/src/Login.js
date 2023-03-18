import React,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import background from './images/blog1.jpg';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const paperStyle={padding :20,height:'75vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const main={backgroundImage:`url(${background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundColor:'#03A9F4'}

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  let Navigate = useNavigate();

  const onLogin = async () => {
    const credentials = {
      email: email,
      password: password
    };
   
    const { data } = await axios.post("http://localhost:5000/api/user/login", credentials)
       .then(async(res)=>{
         await localStorage.setItem("token", res.data.data.token);
         alert("Login In..")
          Navigate('/dashboard')
        }).catch((err)=>{
      alert("username and password are wrong..")
        })
    }
  
    return(
        <div >
        <Grid  >
            <Paper elevation={20} style={paperStyle}   >
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username'  sx={{mb:2}} fullWidth required
                onChange={(e)=>setEmail(e.target.value)}/>
                <TextField label='Password' placeholder='Enter password' sx={{mb:2}}  type='password' fullWidth required
                 onChange={(e)=>setPassword(e.target.value)}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={onLogin}>Sign in</Button>
                
            </Paper>
          
        </Grid>
        </div>
    )
}

export default Login