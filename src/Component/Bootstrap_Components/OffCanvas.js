import React from 'react'
import './styles.css'

import Line from '../Company_Graph/Line';
import Navbar from './Navbar';
import Card1 from './Card';
import Bar_2 from '../Company_Graph/Bar_2';
import Pie from '../Company_Graph/pie';
import Scattered from '../Company_Graph/scattered';
import Line_2 from '../Company_Graph/Line_2';


const Offset = () => {
 const x = 'foo'&&'bar'
 console.log(x)
  // dynamic text to varibles 
const  Bargraph = 'Bar Graph';
const  LineGraph = ' Line Graph';
const  ScatterdGraph =  ' Scatterd Graph';
const Pie1 = "PieGraph";
const Heading = "Display";
const Graph = "Graph";
const View = "View Details";
const Table = "Table";


// canvas   main page 
    const off1 = 
 
    <div>
        <main className="">
          <Navbar/>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 "
                             align="left" >
                                <h4> {Heading }</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card bg-primary text-white h-100">
              <div className="card-body py-5">Primary Card</div>
              <div className="card-footer d-flex">
             {View}
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-warning text-dark h-100">
              <div className="card-body py-5">Warning Card</div>
              <div className="card-footer d-flex">
              {View}
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white h-100">
              <div className="card-body py-5">Success Card</div>
              <div className="card-footer d-flex">
              {View}
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
            </div>
            <div className="col-md-3 mb-3">
            <div className="card bg-danger text-white h-100">
              <div className="card-body py-5">Danger Card</div>
              <div className="card-footer d-flex">
              {View}
                <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          </div>
          <div className="row"> <h4 align="left">{Graph}</h4>
            <div className="col-md-6">
               
            <Card1 Title="Toyota  Data " >
        <Bar_2/>
            </Card1>  
            </div>
            <div className="col-md-6">
           
              
                <Card1 Title="Ford Data " >
     <Line/>
            </Card1>
          
                
            
                
            </div>

            <div className="col-md-6"> 

<Card1 Title=" Daewo Data " >
<Scattered/>
</Card1>

</div> 
 <div className="col-md-6">
            <Card1 Title="Honda Data " >
     <Line_2/>
     </Card1>    
         
        </div>
            <div className="col-md-6">
            <Card1 Title="Citron Data " >
     <Pie/>
     </Card1>    
         
        <div>
       
        
  
      
 
                </div> 
             
            </div>
            <hr />
           
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

export default Offset