import React from 'react'
import { Link } from 'react-router-dom'
import Heroimg from "../assets/hero1.jpg" 


function Hero() {
  return (

    <section className='d-flex flex-column flex-md-row px-3 px-md-5 py-5 hero-bg align-items-center'>
  <div className='w-100 w-md-50 mb-4 mb-md-0 text-center text-md-start'>
    <h2 className='fs-3 mb-3'>
      Hello <br /> I'm VijayKumar 👋
    </h2>
    <p className='fs-5'>I'm a React developer</p>
    <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
      <Link className='link' to=''><i className="bi bi-twitter-x"></i></Link>
      <Link className='link' to='/sd'><i className="bi bi-facebook"></i></Link>
      <Link className='link' to='https://www.linkedin.com/in/vijaykumar-k-j-57808b285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i className="bi bi-linkedin"></i></Link>
    </div>
  </div>

  <div className='w-100 w-md-50 d-flex justify-content-center'>
    <img className='img-fluid' src={Heroimg} alt="Hero" />
  </div>
</section>

    
  )
}

export default Hero