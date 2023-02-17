import React from 'react'
import '../App.css'
import { TextField, Grid, MenuItem, InputLabel, Checkbox, FormControlLabel, FormGroup ,FormControl} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import User from '../images/user.png'
import { height } from '@mui/system';

const Login = () => {
  const [dept, setdept] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setdept(event.target.value);
  };
  return (
    <div>
      <main class="d-flex w-100">
        <div class="container d-flex flex-column">
          <div class="row vh-100">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div class="d-table-cell align-middle">

                <div class="text-center mt-4">
                  <h1 class="h2">Welcome back</h1>
                  <p class="lead">
                    Sign in to your account to continue
                  </p>
                </div>

                <div class="card">
                  <div class="card-body">
                    <div class="m-sm-4">
                      <div class="text-center" >
                        <img src={User} alt="Charles Hall" class="img-fluid rounded-circle" width="132" height="132" />
                        <br />
                      </div>
                      <form action="inslogin.php" method="post" name="adminlogin">
                        <div>
                          <Grid mt={3} mb={3}>
                            <TextField id="username" label="Username" variant="outlined" fullWidth />
                          </Grid>

                          <Grid mt={3} mb={3}>
                            <TextField id="password" label="Password" variant="outlined" fullWidth />
                          </Grid>
                        </div>
                        <div class="mb-3">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">--select--</InputLabel>

                            <Select  labelId="demo-simple-select-label"
          id="demo-simple-select" fullWidth onChange={handleChange} label="--select--" value={dept} >
                              
                              <MenuItem value={10}>Admin</MenuItem>
                              <MenuItem value={20}>Doctor</MenuItem>
                              <MenuItem value={30}>Medical</MenuItem>
                              <MenuItem value={40}>Receptionist</MenuItem>
                            </Select>
                            </FormControl>
                            <small>
                              <a href="index.html">Forgot password?</a>
                            </small>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox defaultChecked />} label=" Remember me next time" />
                            </FormGroup>
                        </div>

                        <div class="text-center mt-3">
                          <button type="submit" class="btn btn-lg btn-primary" style={{ width: 200, height: 50, borderRadius: 5 }}>Sign in</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}

export default Login