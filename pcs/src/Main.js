import React from 'react'
import './css/style.css'
import './css/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './images/logo.png'
import Calendar from './images/calendar.png'
import Staff from './images/staff.png'
import Ambulancefrom from "./images/ambulance.png"
import About from "./images/about.jpg"
import neurologyicon from "./images/neurology-icon.png"
import eyecareicon from "./images/eyecare-icon.png"
import pulmonaryicon from "./images/pulmonary-icon.png"
import cardiologyicon from "./images/cardiology-icon.png"
import dentalicon from "./images/dental-icon.png"
import hepatologyicon from "./images/hepatology-icon.png"
import blog1 from "./images/blog1.jpg"
import blog2 from "./images/blog2.jpg"
import blog3 from "./images/blog3.jpg"
import client1 from "./images/client1.jpg"
import team1 from "./images/team/1.jpg"
import team2 from "./images/team/2.jpg"
import team3 from "./images/team/3.jpg"
import team4 from "./images/team/4.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom'
import { maxWidth } from '@mui/system';
export const Main = () => {


  return (
    <>
      <header>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand1" href="#" style={{marginLeft:-250}}>
                <img src={Logo} alt="logo" />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:-200}}>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0"  >
                  <li class="nav-item">
                    <a class="nav-link1 active" aria-current="page" href="#home-section">Home</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link1" href="#about-section">About</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link1" href="#services-section">Services</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link1" href="#reviews-section">Reviews</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link1" href="#team-section">Our Doctors</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link1" href="#blog-section">Blog</a>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link1" to="/signup"> Sign Up </Link>
                  </li>

                  <li class="nav-item">
                        <Link class="nav-link1" to="/signin"> Patient </Link>
                        <Link class="nav-link1" to="/rlogin">Receptionist </Link>    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section class="hero-banner1" id="home-section">

        <div class="container">
          <div class="row">

            <div class="col-md-12">
              <div class="banner-text-wrap">
                <h1 class="text-white">We Provide Best Medical Services</h1>
                <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                <button style={{ backgroundColor: 'white', width: 250, height: 50, borderRadius: 10, fontSize: 20, marginLeft: 20,color:"black" }}><Link style={{color:"black"}} to='/signin'><b>Book Appointment</b></Link></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features-section">
        <div class="container">
          <div class="row gx-0">

            <div class="col-md-4">
              <div class="features-box bg1">
                <img src={Calendar} alt="Calender" />
                <h3>24 Hours Services</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
              </div>
            </div>


            <div class="col-md-4">
              <div class="features-box bg2">
                <img src={Staff} alt="Staff" />
                <h3>Professional Staff</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="features-box bg3">
                <img src={Ambulancefrom} alt="Ambulancefrom" />
                <h3>Emergency Care</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section class="about-section" id="about-section">
        <div class="container">
          <div class="row gx-5">

            <div class="col-md-6">
              <div class="about-media">
                <img src={About} alt="About" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="about-info">
                <h3>About Us</h3>
                <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy

                </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                <a href="#" class="btn btn-primary">Lean More</a>
              </div>
            </div>



          </div>
        </div>
      </section>

      <section class="services-section" id="services-section">
        <div class="container">
          <div class="row">

            <div class="col-md-12">
              <h2 class="section-title text-center">Services</h2>
            </div>


            <div class="col-md-4">
              <div class="services-box">
                <img src={neurologyicon} alt="neurology-icon" />
                <h3>Neurology</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>


            <div class="col-md-4">
              <div class="services-box">
                <img src={eyecareicon} alt="eyecare-icon" />
                <h3>Eyes care</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>


            <div class="col-md-4">
              <div class="services-box">
                <img src={pulmonaryicon} alt="pulmonary-icon" />
                <h3>Pulomonary</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="services-box">
                <img src={cardiologyicon} alt="cardiology-icon" />
                <h3>Cardiology</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>


            <div class="col-md-4">
              <div class="services-box">
                <img src={dentalicon} alt="dental-icon" />
                <h3>Dental Care</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>


            <div class="col-md-4">
              <div class="services-box">
                <img src={hepatologyicon} alt="hepatology-icon" />
                <h3>Hepatology</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              </div>
            </div>


          </div>
        </div>
      </section>


      <section class="reviews-section bg-overlay" id="reviews-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-title">Customer Reviews</h2>
            </div>


            <div class="col-md-12">

              <div class="reviews-slide owl-theme owl-carousel">

                <div class="item">
                  <div class="review-box">
                    <div class="review-media">
                      <img src={client1} alt="client1" />
                    </div>
                    <div class="review-info">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                      <h4>John Doe</h4>
                      <h5>Patient of Neuorology</h5>
                    </div>
                  </div>
                </div>






              </div>


            </div>





          </div>
        </div>
      </section>


      <section class="team-section" id="team-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-title text-center">Our Expert Team</h2>
            </div>


            <div class="col-md-3">
              <div class="team-box">
                <div class="team-media">
                  <img src={team1} alt="team1" />
                </div>
                <div class="team-info">
                  <h3>Johnathan Doe</h3>
                  <p>Cardiologist</p>
                  <ul class="team-social">
                    <li> <a href=""> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
                    <li> <a href=""> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="team-box">
                <div class="team-media">
                  <img src={team2} alt="" team2 />
                </div>
                <div class="team-info">
                  <h3>Johnathan Doe</h3>
                  <p>Cardiologist</p>
                  <ul class="team-social">
                    <li> <a href=""> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
                    <li> <a href=""> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
                  </ul>
                </div>
              </div>
            </div>


            <div class="col-md-3">
              <div class="team-box">
                <div class="team-media">
                  <img src={team3} alt="" />
                </div>
                <div class="team-info">
                  <h3>Johnathan Doe</h3>
                  <p>Cardiologist</p>
                  <ul class="team-social">
                    <li> <a href=""> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
                    <li> <a href=""> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
                  </ul>
                </div>
              </div>
            </div>


            <div class="col-md-3">
              <div class="team-box">
                <div class="team-media">
                  <img src={team4} alt="" />
                </div>
                <div class="team-info">
                  <h3>Johnathan Doe</h3>
                  <p>Cardiologist</p>
                  <ul class="team-social">
                    <li> <a href=""> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
                    <li> <a href=""> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
                    <li> <a href=""> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



      <section class="blog-section" id="blog-section">

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-title text-center">Blog & News</h2>
            </div>


            <div class="col-md-4">
              <div class="blog-box">
                <div class="blog-media">
                  <img src={blog1} alt="" />
                </div>
                <div class="blog-info">
                  <h3><a href="#">Lorem Ipsum is simply dummy  </a></h3>
                  <ul class="meta">
                    <li> <i class="fa fa-calendar" aria-hidden="true"></i> 18 Sep 2021 </li>
                    <li> <i class="fa fa-user-o" aria-hidden="true"></i> Admin </li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
              </div>
            </div>


            <div class="col-md-4">
              <div class="blog-box">
                <div class="blog-media">
                  <img src={blog2} alt="" />
                </div>
                <div class="blog-info">
                  <h3><a href="#">Lorem Ipsum is simply  </a></h3>
                  <ul class="meta">
                    <li> <i class="fa fa-calendar" aria-hidden="true"></i> 18 Sep 2021 </li>
                    <li> <i class="fa fa-user-o" aria-hidden="true"></i> Admin </li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
              </div>
            </div>


            <div class="col-md-4">
              <div class="blog-box">
                <div class="blog-media">
                  <img src={blog3} alt="" />
                </div>
                <div class="blog-info">
                  <h3><a href="#">Lorem Ipsum is simply dummy  </a></h3>
                  <ul class="meta">
                    <li> <i class="fa fa-calendar" aria-hidden="true"></i> 18 Sep 2021 </li>
                    <li> <i class="fa fa-user-o" aria-hidden="true"></i> Admin </li>
                  </ul>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
              </div>
            </div>


          </div>
        </div>

      </section>





      <footer>
        <div class="content">
          <div class="left box">
            <div class="upper">
              <div class="topic">About us</div>
              <p>CodingLab is a channel where you can learn HTML,
                CSS, and also JavaScript along with creative CSS Animations and Effects.</p>
            </div>
            <div class="lower">
              <div class="topic">Contact us</div>
              <div class="phone">
                <a href="#"><i class="fas fa-phone-volume"></i>+007 9089 6767</a>
              </div>
              <div class="email">
                <a href="#"><i class="fas fa-envelope"></i>abc@gmail.com</a>
              </div>
            </div>
          </div>
          <div class="middle box">
            <div class="topic">Our Services</div>
            <div><a href="#">Home</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Reviews</a></div>
            <div><a href="#">Our Doctors</a></div>
            <div><a href="#">Blog</a></div>
            <div><a href="#"></a></div>
          </div>
          <div class="right box">
            <div class="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name="" value="Send" />
              <div class="media-icons">
                <a href="#"><InstagramIcon color="primary" /></a>
                <a href="#"><FacebookIcon color="primary" /></a>
                <a href="#"><TwitterIcon color="primary" /></a>
                <a href="#"><TelegramIcon color="primary" /></a>



              </div>
            </form>
          </div>
        </div>
        <div class="bottom">
          <p>Copyright © 2020 <a href="#">CodingLab</a> All rights reserved</p>
        </div>
      </footer>





    </>
  )
}
export default Main