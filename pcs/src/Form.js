import App from './App'
import './Signup.css'
function Form() {
  return (
    <div  className='back'>
   <div class="container1">
    <div class="title" style={{marginLeft:200}}>Registration</div>
    <div class="content1">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Email id</span>
            <input type="text" placeholder="Enter your Email id" require/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" placeholder="Enter your password" required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="Confirm your password" required/>
          </div>
          <div class="input-box">
            <span class="details">adreess</span>
            <input type="password" placeholder="Enter your adreess" style={{width:650}} required/>
          </div>
        </div>
        

        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2"  style={{marginRight:260}}>
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
        
          </div>
        </div>

        <div class="gender-details">
          <input type="radio" name="Yes" id="dot-4"/>
          <input type="radio" name="Yes" id="dot-5"/>
                    <span class="gender-title">Is the patient Younger 18?</span>
          <div class="category">
            <label for="dot-4"  >
            <span class="dot four"></span>
            <span class="Yes">Yes</span>
          </label>
          <label for="dot-5" style={{marginRight:300}}>
            <span class="dot five"></span>
            <span class="Yes">No</span>
          </label>
         
          </div>
        </div>

        <div class="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
   </div>
   </div>
  );
}

export default Form;

 