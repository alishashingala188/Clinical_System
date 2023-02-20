import React from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
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
						<h1 class="h3 d-inline align-middle">Add Doctor</h1>
						
      
					</div>
                    <form method='post' action="insdoctor.php" name="adddoctor">
					<div class="row">
						<div class="col-12 col-lg-6">

                     
								
                        <div class="card">
								<div class="card-body">
									<select class="form-select mb-3"  name="selcname">
                                        <option selected>Clinic name</option>
                                        {/* <?php
                                       include "connect.php";

                                       $q="select * from clinic";
                                       $res=mysqli_query($cn,$q) or die(mysqli_error($cn));

                                       while($info=mysqli_fetch_array($res))
                                       {
                                            echo "<option value=".$info['clinic_id'].">".$info['clinic_name']."</option>";

                                       }
                                       ?> */}
                                    </select>
                                </div>
						</div>
							
							<div class="card">
								
								<div class="card-body">
									<input type="text" class="form-control" placeholder="Doctor name" name="txtdname" />
								</div>
							</div>

                            <div class="card">
								
								<div class="card-body">
									<input type="text" class="form-control" placeholder="Enter Username" name="txtuname" />
								</div>
							</div>

                            <div class="card">
								
								<div class="card-body">
									<input type="password" class="form-control" placeholder="Enter password" name="txtpwd" />
								</div>
							</div>

                            <div class="card">
								
								<div class="card-body">
									<input type="number" class="form-control" placeholder="Contact" name="dcon"  />
								</div>
							</div>

							<div class="card">
								
								<div class="card-body">
									<textarea class="form-control" rows="2" placeholder="Address" name="txtdaddress"></textarea>
								</div>
							</div>
                            <div class="card">
								
								<div class="card-body">
									<input type="text" class="form-control" placeholder="Licence Number" name="lno" />
								</div>
							</div>
                            
                            <div class="card">
								
								<div class="card-body">
									<textarea class="form-control" rows="1" placeholder="Speciality" name="txtspec"></textarea>
								</div>
							</div>

                            <div class="card">
								
								<div class="card-body">
									<input type="text" class="form-control" placeholder="Email" name="txtemail" />
								</div>
							</div>
                            <div class="card">
								
                            <button class="btn btn-primary">Insert Doctor</button>
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

export default AddDoctor