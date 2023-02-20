import React from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
const AddMedical = () => {
  return (
    <>
    <div class="wrapper">
        <Sidebar />
            <div class="wrapper">
                <div class="main">
                        <Nav />
                  <main class="content">
                <div class="container-fluid p-0">

                    <div class="mb-3">
                        <h1 class="h3 d-inline align-middle">Add Medical</h1>
                      
                    </div>
                    <form method='post' action="insmedical.php" name="addmedical">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="card">

                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Medical name"
                                            name="txtmname" />
                                    </div>
                                </div>

                                <div class="card">

                                    <div class="card-body">
                                        <textarea class="form-control" rows="2" placeholder="Medical address"
                                            name="txtmaddress"></textarea>
                                    </div>
                                </div>
                                <div class="card">

                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="License number" name="lno" />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <input type="number" class="form-control" placeholder="Medical Contact"
                                            name="medicon" />
                                    </div>
                                </div>
                                <div class="card">

                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Email" name="txtemail" />
                                    </div>
                                </div>

                                <div class="card">

                                    <div class="card-body">
                                        <input type="password" class="form-control" placeholder="Password"
                                            name="txtpass" />
                                    </div>
                                </div>
                                <div class="card">

                                    <button class="btn btn-primary">Add Medical</button>
                                </div>


                            </div>

                        </div>
                    </form>
</div>
            </main>
            <Footer/>    
            </div>
            </div>
           
            </div>   
             
    </>
  )
}

export default AddMedical