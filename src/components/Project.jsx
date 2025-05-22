import React from 'react'
import Webimg1 from '../assets/Webimg1.jpg';
import Webimg2 from '../assets/Webimg2.jpg';


function Project() {
  return (
    
    <section id={'projects'} className="d-flex flex-column justify-content-center align-items-center py-5 project">
  <div className="w-100 w-md-50">
    <div className="d-flex justify-content-center h1">
      <h1>Project</h1>
    </div>
  </div>

  <div className="container px-3 px-md-5">
    <div className="row py-3">

      {/* Project 1 */}
      <div className="col-12 col-md-6 mb-4">
        <div className="d-flex flex-column align-items-center image-bg  rounded">
          <img className="img-fluid image mb-3" src={Webimg1} alt="Webimg1" />
          <p className="text-center py-5 text-white">This project is built with React JS</p>
          <a href='https://github.com/vijay03842/project' target="_blank" 
           rel="noreferrer" className="btn btn-primary text-nowrap mt-3">Source Code</a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="col-12 col-md-6 mb-4">
        <div className="d-flex flex-column align-items-center image-bg  rounded">
          <img className="img-fluid image mb-3" src={Webimg2} alt="Webimg2" />
          <p className="text-center py-5  text-white">This project is built with React JS</p>
          <a href='https://github.com/vijay03842/projects1' className="btn btn-primary text-nowrap mt-3">Source Code</a>
        </div>
      </div>

    </div>
  </div>
</section>



    
  )
}

export default Project