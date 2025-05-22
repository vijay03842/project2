import React from 'react'
import AboutImg from '../assets/About.jpg';


function About(id) {
  return (
   
    <section id={'about'}className="container-fluid about-bg py-5 ">
  <div className="row align-items-center">
    {/* Image Section */}
    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
      <img className="img-fluid" src={AboutImg} alt="About" />
    </div>

    {/* Text Section */}
    <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center  px-5">
      <h1 className="fs-1 mb-3">About Me</h1>
      <p>
        Hi! My name is Vijaykumar. I am a React developer. I built a portfolio website using React and Bootstrap.
      </p>
      <p>I enjoy creating websites and learning new technologies.  I like solving problems through code and building projects that are helpful and easy to use</p>
    </div>
  </div>
</section>


  
  );
}  

export default About