import React from 'react'
import '../App.css'
import { TextField, Grid, MenuItem, InputLabel, Checkbox, FormControlLabel, FormGroup ,FormControl} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import User from '../images/user.png'
import { height } from '@mui/system';

const Login = () => {
 

  function changePage(){
     Response.redirect('Dashboard.js')
  }
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
                        <img src={User} alt="Charles Hall"  class="img-fluid rounded-circle" width="132" height="132" style={{marginBottom:20}} />
                        <br />
                      </div>
                      <form>
                      <div class="mb-3">
											<input class="form-control form-control-lg" type="text" name="txtuname" placeholder="Enter your Username" style={{marginBottom:20}}/>
										</div>
										<div class="mb-3">
											<input class="form-control form-control-lg" type="password" name="txtpwd" placeholder="Enter your password" style={{marginBottom:20}} />

										</div>
										<div class="mb-3">
											<select class="form-control form-control-lg" name="selrole" style={{marginBottom:10}}>
												<option>Admin</option>
												<option>Doctor</option>
											</select>
											<small>
												<a href="index.html">Forgot password?</a>
											</small>
										</div>
										<div>
											<label class="form-check">
												<input class="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
												<span class="form-check-label">
													Remember me next time
												</span>
											</label>
										</div>
										<div class="text-center mt-3">
											<button type="submit" class="btn btn-lg btn-primary" style={{width:200,height:40}}>Sign in</button>
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