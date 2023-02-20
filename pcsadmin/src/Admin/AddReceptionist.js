import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Nav from './Nav'


const AddReceptionist = () => {
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
						<h1 class="h3 d-inline align-middle">Add Receptionist</h1>
					</div>
					<form method='post' action="insreceptionist.php" name="addreceptionist">
						<div class="row">
							<div class="col-12 col-lg-6">



								
								<div class="card">

									<div class="card-body">
										<input type="text" class="form-control" placeholder="Receptionist name" name="txtrname" />
									</div>
								</div>

							
								<div class="card">

									<div class="card-body">
										<input type="password" class="form-control" placeholder="Enter password" name="txtpwd" />
									</div>
								</div>

								<div class="card">

									<div class="card-body">
										<input type="text" class="form-control" placeholder="Email" name="txtemail" />
									</div>
								</div>

								<div class="card">

									<div class="card-body">
										<textarea class="form-control" rows="2" placeholder="Address" name="txtraddress"></textarea>
									</div>
								</div>

								<div class="card">

									<div class="card-body">
										<input type="number" class="form-control" placeholder="Contact" name="rcon" />
									</div>
								</div>
								<div class="card">

									<div class="card-body">
										<select name="selgender" class="form-control">

											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</div>


								<div class="card">

									<button class="btn btn-primary">Insert Receptionist</button>
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

export default AddReceptionist