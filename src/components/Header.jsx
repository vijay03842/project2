import { useState } from 'react';
import '../App.css';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header-bg text-white ">
      <div className="d-flex justify-content-between px-2 py-3 align-items-center">
        <h1 className="m-0">My Portfolio</h1>

        {/* Hamburger Button for Mobile */}
        <button
          className="d-block d-md-none border-0 bg-transparent"
          style={{ height: '30px' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bi bi-list fs-3 text-white"></i>
        </button>
     
     {/* Desktop Menu */}
     <ul className="d-none d-md-flex list-unstyled mb-0 mt-2">
        <li className="mx-2"><a href="/" className="nav-link-1 text-white">Home</a></li>
        <li className="mx-2"><a href="#about" className="nav-link-1 text-white">About</a></li>
        <li className="mx-2"><a href="#projects" className="nav-link-1 text-white">Projects</a></li>
        <li className="mx-2"><a href="#Resume" className="nav-link-1 text-white">Resume</a></li>
        <li className="mx-2"><a href="#contact" className="nav-link-1 text-white">Contact</a></li>
      </ul>
      </div> 

     
      {/* Mobile Menu */}
      {menuOpen && (
        <ul onClick={()=>setMenuOpen(!menuOpen)} className="list-unstyled d-md-none mt-2 menu-bg  ">
          <li className=""><a href="/" className="nav-link text-white">Home</a></li>
          <li className=""><a href="#about" className="nav-link text-white">About</a></li>
          <li className=""><a href="#projects" className="nav-link text-white">Projects</a></li>
          <li className=""><a href="#Resume" className="nav-link text-white">Resume</a></li>
          <li className=""><a href="#contact" className="nav-link text-white">Contact</a></li>
        </ul>
       
      )}
     

    </nav>
  );
}

export default Header;
