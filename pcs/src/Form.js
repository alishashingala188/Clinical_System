import React, { useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Form = () => {
  const [full_name, setFull_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [age,setAge]=useState("");
  const [sec_question,setSec_question]=useState("");
  const [answer,setAnswer]=useState("");
    

  const Navigate = useNavigate()

  const addpatienthandler = async (e) => {
    e.preventDefault();
    const data = {
      full_name: full_name,
      username: username,
      password: password,
      contact_no: contact_no,
      address: address,
      email: email,
      age:age,
      sec_question:sec_question,
      answer:answer
   
    }
    console.log(data);
    await axios.post('http://localhost:5000/api/user/addPatient', data).then(() => {
      alert("Record Inserted successfully.....")
      Navigate('/signin')
    })
  }
  return (
    <div  className='back'>
   <div class="container1">
    <div class="title" style={{marginLeft:200}}>Registration</div>
    <div class="content1">
      <form  onSubmit={addpatienthandler}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required name='full_name'
            onChange={(e)=>setFull_name(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" name='username' required
             onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Email id</span>
            <input type="email" placeholder="Enter your Email id" name='email' require
             onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" name='contact_no' required 
             onChange={(e)=>setContact_no(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" placeholder="Enter your password"  name='password' required
             onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">address</span>
            <input type="text" placeholder="Enter your adreess" name='address' required
             onChange={(e)=>setAddress(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">age</span>
            <input type="text" placeholder="Enter your adreess" name='age' required
             onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">security Question</span>
            <select name="sec_question" style={{height:40,border:" 1px solid #ccc",borderRadius: '5px',width:"300px"}}
             onChange={(e)=>setSec_question(e.target.value)}>
              <option>-- select --</option>
              <option>What is your favorite color ?</option>
              <option>What is your favorite acter ?</option>
              <option>What is your favorite birds ?</option>
            </select>
             </div>
          <div class="input-box">
            <span class="details">answer</span>
            <input type="text" placeholder="Enter your answer"  name='answer' required
             onChange={(e)=>setAnswer(e.target.value)}/>
          </div>
          <div>

          </div>
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
        </div>
      </form>
      </div>
    </div>
   </div>
  );
}
export default Form;

 