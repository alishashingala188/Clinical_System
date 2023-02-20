import React from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
const Changepwd = () => {
  return (
    <>
      <div class="wrapper">
        <Sidebar />
            <div class="wrapper">
                <div class="main">
                        <Nav />
      <main class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3">Change Password</h1>

                    <div class="row">
                        <div class="col-12">
                            <form action="inschangepwd.php" method="post" name="Changepassword">
                            <div class="row">

                                <div class="col-12 col-lg-6">
                                        <div class="card">

                                            <div class="card-body">
                                                <input type="password" class="form-control" name="txtcpass"
                                                    placeholder="Current Password"  />
                                            </div>
                                        </div>

                                        <div class="card">

                                            <div class="card-body">
                                                <input class="form-control" id="txtnpass" name="txtnpass"
                                                    type="password" pattern="^\S{6,}$"
                                                    onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.txtcnpass.pattern = this.value;"
                                                    placeholder="Password" required/>
                                            </div>
                                        </div>

                                      

                                        <div class="card">

                                            <div class="card-body">
                                                <input class="form-control" id="txtcnpass" name="txtcnpass"
                                                    type="password" pattern="^\S{6,}$"
                                                    onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');"
                                                    placeholder="Verify Password" required/>

                                            </div>
                                        </div>

                                        <div class="text-center mt-3">
                                            
                                            <button type="submit" class="btn btn-lg btn-primary">Change
                                                Password</button>
                                        </div>
                                    </div>
                                    </div>
                                    </form>
                                    </div>
                                    </div>  
                                    </div>                   
            </main>
            <Footer/>   
            </div>
            </div>
             

            </div>
        

         
    </>
  )
}

export default Changepwd