import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
const Changepwd = () => {
    const [oldpassword, setOldpassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const changepassword = async () => {
        const { result } = await axios.put('http://localhost:5000/api/admin/cpassword/');
        console.log(result);
    }
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
                                        <form method="post" name="Changepassword">
                                            <div class="row">

                                                <div class="col-12 col-lg-6">
                                                    <div class="card">

                                                        <div class="card-body">
                                                            <input type="password" class="form-control" name="oldpassword"
                                                                placeholder="old Password" onChange={(e) => setOldpassword(e.target.value)} />
                                                        </div>
                                                    </div>

                                                    <div class="card">

                                                        <div class="card-body">
                                                            <input class="form-control" id="txtnpass" name="password"
                                                                type="password" onChange={(e) => setPassword(e.target.value)}
                                                                placeholder="password" required />
                                                        </div>
                                                    </div>



                                                    <div class="card">

                                                        <div class="card-body">
                                                            <input class="form-control" id="txtcnpass" name="confirmpassword"
                                                                type="password" onChange={(e) => setConfirmPassword(e.target.value)}
                                                                placeholder="confirm Password" required />

                                                        </div>
                                                    </div>

                                                    <div class="text-center mt-3">

                                                        <button type="button" class="btn btn-lg btn-primary" onClick={changepassword}>Change
                                                            Password</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>


            </div>



        </>
    )
}

export default Changepwd