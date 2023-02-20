import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Nav from './Nav'

const AddMedicine = () => {
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
                        <h1 class="h3 d-inline align-middle">Add Medicine</h1>         
                    </div>
                    <form method='post' action="insmedicine.php" name="addmedicine">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="card">

                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Medicine name" name="txtmname" />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Company Name" name="txtconame" />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Medicine Type" name="txtmtype" />
                                    </div>
                                </div>

                                <div class="card">
                                    <button class="btn btn-primary">Add Medicine</button>
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

export default AddMedicine