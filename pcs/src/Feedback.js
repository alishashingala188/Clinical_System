import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './Sidebar'
import Footer from './Footer'
import Nav from './Nav'

import Rating from '@mui/material/Rating';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
     <div class="wrapper">
        <Sidebar />
            <div class="wrapper">
                <div class="main">
                        <Nav />
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginLeft:-20,
            marginRight:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
            {/* <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h3" sx={{ } }>
            Feedback
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mb: -9 }}>
          
          <TextField
              margin="normal"
              required
              fullWidth
              id="uname"
              label="UserName"
              name="UName"
              autoComplete="Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          

             <TextField
             margin="normal"
             required
             fullWidth
          id="outlined-multiline-static"
          label="Message"
        
          rows={3}
          
         
        />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Typography component="legend"><h4>How Did You Like it Overall?</h4></Typography>
          <Rating name="size-large" defaultValue={2} size="large" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,height:40}}
            >
              Submit
            </Button>
            
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}