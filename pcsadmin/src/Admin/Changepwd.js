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
            <div className="wrapper">
                <Sidebar />
                <div className="wrapper">
                    <div className="main">
                        <Nav />
                        <main className="content">
                            <div className="container-fluid p-0">

                                <h1 className="h3 mb-3">Change Password</h1>

                                <div className="row">
                                    <div className="col-12">
                                        <form method="post" name="Changepassword">
                                            <div className="row">

                                                <div className="col-12 col-lg-6">
                                                    <div className="card">

                                                        <div className="card-body">
                                                            <input type="password" className="form-control" name="oldpassword"
                                                                placeholder="old Password" onChange={(e) => setOldpassword(e.target.value)} />
                                                        </div>
                                                    </div>

                                                    <div className="card">

                                                        <div className="card-body">
                                                            <input className="form-control" id="txtnpass" name="password"
                                                                type="password" onChange={(e) => setPassword(e.target.value)}
                                                                placeholder="password" required />
                                                        </div>
                                                    </div>



                                                    <div className="card">

                                                        <div className="card-body">
                                                            <input className="form-control" id="txtcnpass" name="confirmpassword"
                                                                type="password" onChange={(e) => setConfirmPassword(e.target.value)}
                                                                placeholder="confirm Password" required />

                                                        </div>
                                                    </div>

                                                    <div className="text-center mt-3">

                                                        <button type="button" className="btn btn-lg btn-primary" onClick={changepassword}>Change
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