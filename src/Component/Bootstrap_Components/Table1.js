import React,{useEffect,useState} from 'react'
import Data from '../data/db.json'
import Navbar from './Navbar';
function Table1() {

    // use effect
  //  const [posts,setPosts]=useState([

 //   ])
//useEffect(()=>{
   // const url = 'https://jsonplaceholder.typicode.com/posts'
   // fetch(url).then(res=> res.json() )
  //  .then(res=> setPosts(res))
//},[])

//Table
    const name= "name";
    const Surname= "Surname";
    const Preformance = " Preformance";
  
    const table12  = <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col" >{name}</th>
        <th scope="col">{Surname}</th>
        <th scope="col">{Preformance}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"  className=" bg-danger" >1</th>
        <td  className=" bg-danger" >{Data.Company.map((x)=>  {return x.Employee_name })}</td>
        <td className=" bg-danger" >{Data.Company.map((x)=>  {return x.Employee_Surname })}</td>
        <td  className=" bg-danger">50%</td>
      </tr>
      <tr>
        <th scope="row" class="  bg-warning "   >2</th>
        <td className="  bg-warning " >{Data.Company.map((x)=>  {return x.Employee_name1 })}</td>
        <td className=" bg-warning" >{Data.Company.map((x)=>  {return x.Employee_Surname1 })}</td>
        <td className=" bg-warning" > 60%</td>
      </tr>
      <tr>
        <th scope="row" className=" bg-success ">3</th>
        <td className=" bg-success ">{Data.Company.map((x)=>  {return x.Employee_name2 })}</td>
        <td className=" bg-success ">{Data.Company.map((x)=>  {return x.Employee_Surname2 })}</td>
        <td className=" bg-success ">80%</td>
      </tr>
    </tbody>


  </table>


  ;
    
    const Edit = "Edit user ";
    const Set  = "settings ";
    const Tab = "Table";
    // canvas   main page 
     
  
        const off1 = 
     
        <div>
            <main className="">
              <Navbar/>
                  <div>
                    <h4 align="left">{Tab}</h4>
  {table12}
 {
   // posts.map(post=> <div><p>{post.body}</p></div>)
}

                  </div>
            </main>
        </div>
         ; 
  
  
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
              <a href="/"className="nav-link px-3 active">
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
                        ><i className="bi bi-speedometer2"/>
                      </span>
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
      
      </div> ; 


  return (
    
    <div>


    {off}
    {off1}
    </div>
  )
}

export default Table1