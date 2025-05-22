import React from 'react'
import resumeImg from '../assets/Resume.jpg'

function Resume() {
  return (
    
   <section className="container-fluid resume-bg py-5 " id={'Resume'}>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img className="img-fluid" style={{height:'500px', width:'500px'}}src={resumeImg } alt="About" />
        </div>
    
        {/* Text Section */}
        <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center  px-5">
            <h1 className="fs-1 mb-3">Resume</h1>
            <p>
              you can view my resume <a className='btn btn-primary ' href="https://github.com/vijay03842/my-resume/blob/main/vijaykumar%20resume.pdf"> Download</a>
            </p>
        </div>
      </div>
  </section>
    
  )
}

export default Resume