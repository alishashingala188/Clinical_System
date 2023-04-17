import * as React from 'react';
import Sidebar from './Sidebar'
import Footer from './Footer'
import Nav from './Nav'
import './css/feedback.css'



export default function SignIn() {
 
  

  return (
    <>
     <div class="wrapper">
        <Sidebar/>
            <div class="wrapper">
                <div class="main">
                        <Nav />
                        <main className="content">
              <div className="container-fluid p-0">

                {/* //login  */}

                <div className="login-page">
          <div className="login">
            <h1 className="login-title">Contact Us </h1>
            <div className="login-label">
              <label for=""> Name ::</label>
            </div>
            <input
              type="text"
              className="login-input"
              placeholder="Enter your Name "
            />

            <div className="login-label">
              <label for="">Email address</label>
            </div>
            <input
              type="text"
              className="login-input"
              placeholder="xyz@gmail.com"
            />
           <div className="login-label">
              <label for="">Message ::</label>
            </div>
            <textarea
              type="text"
              className="login-input"
              placeholder="Enter Your Feedback"
              rows={5}
              cols={5}
            />
            
            </div>

            
            <button className="btn btn-login">Submit</button>
          
          </div>
        </div>



      </main>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}