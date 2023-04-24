import React, { useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';
import {message} from 'antd'
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
    
    if (full_name === '' || username === "") {
      message.error("Please fill up name & username")
    }
    
    else if(email === "" || email.search( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ){
      message.error("Please Email Id must be strig,digit and @ include ")
    }
    else if(contact_no.match(/^10/)){
      message.error("Contact no must be 10 char.")

    }
    else if (password.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {
      message.error("Please fill password Using one uppercase,one lower case and special chracter and digit greter then 8 char.")
    }
   
    else if(address == ""){
      message.error("Please fill up address")

    }
    else if(age == ""){
      message.error("Please fill up age")

    }
    else if(sec_question == ""){
      message.error("Please fill up sec_question")

    }
    else if(answer == ""){
      message.error("Please fill up answer")

    }
    else {
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
      message.success("Record Inserted successfully.....")
      Navigate('/signin')
    })
  }
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
            <input type="text" placeholder="Enter your name"  name='full_name'
            onChange={(e)=>setFull_name(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" name='username' 
             onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Email id</span>
            <input type="email" placeholder="Enter your Email id" name='email' 
             onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" name='contact_no'  
             onChange={(e)=>setContact_no(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" placeholder="Enter your password"  name='password' 
             onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">address</span>
            <input type="text" placeholder="Enter your adreess" name='address' 
             onChange={(e)=>setAddress(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">age</span>
            <input type="number" placeholder="Enter your age" name='age' 
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
            <input type="text" placeholder="Enter your answer"  name='answer' 
             onChange={(e)=>setAnswer(e.target.value)}/>
          </div>
          <div>

          </div>
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
        </div>
        <div>
         You Have Already Account  <Link to='/signin'>Sign In here</Link>
        </div>
      </form>
      </div>
    </div>
   </div>
  );
}
export default Form;

 