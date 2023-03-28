import React, { useState } from 'react'
import User from '../images/user.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let Navigate = useNavigate();

  const onLogin = async () => {
    const credentials = {
      email: email,
      password: password
    };

    const  {data}  = await axios.post("http://localhost:5000/api/doctor/dlogin", credentials)
    .then(async (res) => {

        await localStorage.setItem("token", res.data.data.token);
        message.success("Login Successfully");
        if (res?.data?.data?.user?.type === "admin") {
          await Navigate("/dashboard");
        } else {
          await Navigate("/ddashboard");
        }
      }).catch(()=>{
        message.error("Plese enter valid username and password");
      })
  };


return (
  <div>
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">

              <div className="text-center mt-4">
                <h1 className="h2">Welcome back</h1>
                <p className="lead">
                  Sign in to your account to continue
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center" >
                      <img src={User} alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" style={{ marginBottom: 20 }} />
                      <br />
                    </div>
                    <form>
                      <div className="mb-3">
                        <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your Email Id" style={{ marginBottom: 20 }}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" style={{ marginBottom: 20 }}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                      </div>
                      <div className="mb-3">

                        <small>
                          <a href="index.html">Forgot password?</a>
                        </small>
                      </div>
                      <div>
                        <label className="form-check">
                          <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
                          <span className="form-check-label">
                            Remember me next time
                          </span>
                        </label>
                      </div>
                      <div className="text-center mt-3">
                        <button className="btn btn-lg btn-primary" style={{ width: 200, height: 40 }} type="button" onClick={onLogin}>Sign in</button>
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