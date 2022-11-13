import React from 'react'
import Navbar from './Navbar';

const settings = () => {
  // dynamic text to varibles 

  const Edit = "Edit user ";
  const Set  = "settings "
  // canvas   main page 
   

      const off1 = 
   
      <div>
          <main className="">
            <Navbar/>
                <div>

                  <h5 align ="left">{Edit} </h5>
                  <hr></hr>
                  <p align = "left">Click here to edit the profile of the user </p>
                 <p align ="left"><button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Edit user 
</button></p> 
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div  className="modal-content">
      <div className="modal-header">
        <h5  className="modal-title" id="exampleModalLabel">Profile </h5>
        <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div  className="modal-body">
      <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress" align ="left">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">

    </div>
  </div>
 
</form>
      </div>
      <div  classNameName="modal-footer">
        <button type="button"  classNameName="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"  classNameName="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                </div>
          </main>
      </div>
       ; 
  
  //canvas side bar 
  const Dashboard ='Dashboard' ; 
  const  CORE =' CORE' ; 
  const   Interface ='  Interface' ; 
  const  Layouts =' Layouts'; 
  const  Pages =' Pages' ;
  const   Addons =' Addons' ; 
  const Charts ='  Chart' ; 
  const Tables='Tables ';
  const Settings = 'Settings';
    const off =  
  
    <div
    className="offcanvas offcanvas-start sidebar-nav bg-dark"
    tabindex="-1"
    id="sidebar"
  >
    <div className="offcanvas-body ">
      <nav className="navbar-dark">
        <ul className="navbar-nav">
  
          <li>
            <div className="text-muted small fw-bold text-uppercase px-3">
            {CORE}
            </div>
          </li>
          <li>
            <a href="/" className="nav-link px-3 active">
              <span className="me-2"><i className="bi bi-speedometer2"></i></span>
              <span>{Dashboard}</span>
            </a>
          </li>
          <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
          <li>
            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
            {Interface}
            </div>
          </li>
          <li>
            <a
              className="nav-link px-3 sidebar-link"
              data-bs-toggle="collapse"
              href="#layouts"
            >
              <span className="me-2"><i className="bi bi-layout-split"></i></span>
              <span>{Layouts}</span>
              <span className="ms-auto">
                <span className="right-icon">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </span>
            </a>
            <div className="collapse" id="layouts">
              <ul className="navbar-nav ps-3">
                <li>
                  <a href="#" className="nav-link px-3">
                    <span className="me-2"
                      ><i className="bi bi-speedometer2"></i
                    ></span>
                    <span>{Dashboard}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="nav-link px-3">
              <span className="me-2"><i className="bi bi-book-fill"></i></span>
              <span>{Pages}</span>
            </a>
          </li>
          <li className="my-4"><hr className="dropdown-divider bg-light" /></li>
          <li>
            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
             {Addons}
            </div>
          </li>
          <li>
            <a href="#" className="nav-link px-3">
              <span className="me-2"><i className="bi bi-graph-up"></i></span>
              <span>{ Charts}</span>
            </a>
          </li>
          <li>
            <a href="/table" className="nav-link px-3">
    
              
              <span className="me-2"><i className="bi bi-table"></i></span>
              <span>{Tables} </span>
         
           
            </a>
            <hr className="dropdown-divider bg-light" />
  
                <a href="/settings" className="nav-link px-3">
                <li>
            <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
     Setting
            </div>
          </li>
                  
                    <span className="me-2"><i className="bi bi-menu-button"></i></span>
                    <span>{Settings} </span>
  
  
            </a>
          </li>
        </ul>
      </nav>
    </div>
  
    </div>
  
  ; 

  return (
    <div>
      {off}
      {off1}
    </div>
  )
}

export default settings