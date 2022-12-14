import React from 'react'
import Offset from './OffCanvas'

const Navbar = () => {
  const Dashboard = 'Dashboard'; 
    const navbar = 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand fw-bold text-uppercase" href="#" >{Dashboard}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
     

      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="bi bi-search"></i></button>
      </form>
 
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="bi bi-person-fill"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end"  aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/">Dashbaord</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/settings">Settings</a>
          </div>

       

    </div>
  </nav>

    
    ; 


   
  return (
    <div>
       {navbar}
       
    </div>
  )
}

export default Navbar