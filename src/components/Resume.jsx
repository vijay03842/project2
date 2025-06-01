import React from 'react';
import resumeImg from '../assets/Resume.jpg'; // Make sure this path is correct

function Resume() {
  return (
    <section className="container-fluid resume-bg py-5" id="Resume">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            className="img-fluid"
            style={{ height: '500px', width: '500px' }}
            src={resumeImg}
            alt="Resume Preview"
          />
        </div>
        <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center px-5">
          <h1 className="fs-1 mb-3">Resume</h1>
          <p>
            You can view my resume
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2"
            >
              <button className="btn btn-primary">Download</button>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
