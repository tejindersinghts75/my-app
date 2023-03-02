import {Link} from 'react-router-dom';

function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
                <div className="m-auto">
                  <div className="text-center">  
                        <a className="navbar-brand" href="#"><img src={props.img} /></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                  </div>    
                        
                  <div >      
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                      <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                      <Link className="nav-link text-white" to="/About">About</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                      </a>
                                      <ul className="dropdown-menu text-white" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                      </ul>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link disabled text-white" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                              </ul>
                              <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                              </form>
                        </div>
                  </div>      
                </div>

</nav>
    )
}

    

export default Navbar;