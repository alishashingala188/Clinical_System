import React from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
const AddDoctor = () => {
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
                        <h1 class="h3 d-inline align-middle">Insert Clinic</h1>
                    
                    </div>
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="card">

                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Clinic name"
                                            name="txtcname" />
                                    </div>
                                </div>

                                <div class="card">

                                    <div class="card-body">
                                        <textarea class="form-control" rows="2" placeholder="Clinic address"
                                            name="txtcladdress"></textarea>
                                    </div>
                                </div>
                                <div class="card">

                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Registration number"
                                            name="rno" />
                                    </div>
                                </div>
                                <div class="card">

                                    <div class="card-body">
                                        <textarea class="form-control" rows="2" placeholder="Facilities"
                                            name="txtfac"></textarea>
                                    </div>
                                </div>
                                <div class="card">

                                    <div class="card-body">
                                        <input type="number" class="form-control" placeholder="Clinic Contact"
                                            name="nocon" />
                                    </div>
                                </div>
                                <div class="card">

                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="email" name="txtemail" />
                                    </div>
                                </div>
                                <div class="card">

                                    <button class="btn btn-secondary">Insert Clinic</button>
                                </div>


                            </div>
</div>
                        </div>
                       </main>
            </div>
            </div>
            </div>
            

    </>
  )
}

export default AddDoctor