import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
const AddDoctor = () => {
  const [dname,setDname]=useState("");
  const [duname,setDuname]=useState("");
  const [pwd,setPwd]=useState("");
  const [cno,setCno]=useState("");
  const [add,setAdd]=useState("");
  const [spec,setSpec]=useState("");
  const [email,setEmail]=useState("");
  const [gen,setGen]=useState("");


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
													<input type="text" class="form-control" placeholder="Doctor name" name="dname" 
													onChange={(e)=>setDname(e.target.value)}/>
												</div>
											</div>
											<div class="card">

												<div class="card-body">
													<input type="text" class="form-control" placeholder="Enter Username" name="duname"
													onChange={(e)=>setDuname(e.target.value)} />
												</div>
											</div>

											<div class="card">

												<div class="card-body">
													<input type="password" class="form-control" placeholder="Enter password" name="pwd" 
													onChange={(e)=>setPwd(e.target.value)}/>
												</div>
											</div>

											<div class="card">

												<div class="card-body">
													<input type="number" class="form-control" placeholder="Contact No" name="dcon" 
													onChange={(e)=>setCno(e.target.value)}/>
												</div>
											</div>


											<div class="card">

												<div class="card-body">
													<textarea rows="4" cols="50"  class="form-control" placeholder="Address" name="add"
													onChange={(e)=>setAdd(e.target.value)} ></textarea>
												</div>
											</div>

											<div class="card">

												<div class="card-body">
													<select class="form-control" rows="1" placeholder="Speciality" name="spec"
													onChange={(e)=>setSpec(e.target.value)}>
														<option >--Select speciality--</option>
														<option>Eye Speciality</option>
														<option>Dentist specialist</option>
														<option>Allergist</option>
														<option>Cardiologist</option>
														<option>Heart specialist </option>
														<option>Skin specialist</option>
														<option>neurologist specialist</option>
														
													</select>
												</div>
											</div>

											<div class="card">

												<div class="card-body">
													<input type="text" class="form-control" placeholder="Email" name="email"
													onChange={(e)=>setEmail(e.target.value)} />
												</div>
											</div>
											<div class="card">

												<div class="card-body">
													Select Gender ::
													<br/>
													<input type="radio" name="gender" id="male" onChange={(e)=>setGen(e.target.value)}/>
													<label for="male">Male</label><br />
													<input type="radio" name="gender" id="female" onChange={(e)=>setGen(e.target.value)} />
													<label for="female">Female</label>
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
						<Footer />
					</div>
				</div>
			</div>



		</>
	)
}

export default AddDoctor