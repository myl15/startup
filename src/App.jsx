import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="body">
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-ligh">
          <div className='container-fluid'>
            <a href="index.html" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
              </svg>
              <h1 id='mainHeader'>OneGlobe</h1>
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link link-dark' href='index.html'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link link-dark' href='travel.html'>Travel</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link link-dark' href='#header2'>About Us</a>
                </li>
              </ul>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <form className='d-flex' role='search'>
                    <input className="form-control me-2" type="search" placeholder="Search"><button class="btn btn-outline-success" type="submit"/></input> 
                  </form>
                </li>
                <li className="nav-item">
				          <button type="button" id="userLoginButton" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#loginModal">
					        Log In
				          </button>
			          </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div id="loginModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
    
      {/* Modal Content */}
      <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
        <h4 className="modal-title">Login</h4>
      </div>
      <div className="modal-body">
        <div className="userInfo" id="userInfo" onsubmit="(e)=>e.preventDefault()">
        <input type="text" id="userName" placeholder="Enter Email"></input>
          <input type="password" id="userPassword" placeholder="Password"></input>
          <button className="btn btn-primary" onclick="loginUser()">Login</button>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-bs-toggle="modal" data-bs-target="#newUserModal">New User</button>
      </div>
      </div>
  
	  </div>
  </div>

  <div id="newUserModal" className="modal fade" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
          <h4 className="modal-title">Create New Account</h4>
        </div>
        <div className="modal-body">
          <div className="userInfo" id="newuserInfo" onsubmit="(e)=>e.preventDefault()">
            <input type="text" id="firstName" placeholder="First Name"></input> 
            <input type="text" id="lastName" placeholder="Last Name"></input> 
            <input type="email" id="userEmail" placeholder="Email Address"></input> 
            <input type="text" id="newuserName" placeholder="Create Username"></input> 
            <input type="password" id="newuserPassword" placeholder="Create Password"></input>
            <button className="btn btn-primary" onclick="createUser()">Login</button>
      </div>
        </div>
          <div className="modal-footer">
            <button id ="loginButton" type="button" className="btn btn-default" data-bs-toggle="modal" data-bs-target="#loginModal">Returning User</button>
          </div>
        </div>
      
      </div>
    </div>
      <div className="modal fade" id="msgModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-dark">
            <div className="modal-body">error message here</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="container-fluid">

          <div id="container1">
              <h2 id="header1">OneGlobe is</h2>
          </div>
          

          <div id="container">
          <span id="text1">Travel</span>
          <span id="text2"></span>
          </div>

          <svg id="filters">
          <defs>
              <filter id="threshold">
                  <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 255 -140" />
              </filter>
          </defs>
          </svg>

              <div className="travelcards">
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg" alt="Grand-Canal-Venice"/>
          <div className="card-body">
            <h5 className="card-title">Visit Italy</h5>
            <p className="card-text">One of the top destinations in the world, Italy provides a wonderful mix of history and modern within its winding streets.</p>
            <a href="travel.html" className="btn btn-outline-secondary">Lets Go</a>
          </div>
        </div>
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="https://theplanetd.com/images/Best-Views-in-New-York-City.jpg" alt="Best-Views-in-New-York-City"/>
          <div className="card-body">
            <h5 className="card-title">Our Top 5</h5>
            <p className="card-text">View our top 5 global destinations and learn a little bit about each one along the way.  We promise you won't be disappointed.</p>
            <a href="travel.html" className="btn btn-outline-secondary">Lets Go</a>
          </div>
        </div>
          <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="https://www.sftravel.com/sites/default/files/styles/hero/public/2022-10/Golden%20Gate%20Bridge%20-%2022.jpg?h=0da8e9e4&itok=qnu4l-xG" alt="Golden-Gate-Bridge"/>
          <div className="card-body">
            <h5 className="card-title">Domestic Travel</h5>
            <p className="card-text">No need to break the bank to get away for a while.  Explore our domestic travel options and find your perfect getaway.</p>
            <a href="travel.html" className="btn btn-outline-secondary">Lets Go</a>
          </div>
        </div>
      
      </div>

        <div id="typography" className="demo-box">
          <div className="container-fluid">
            <h2 id="header2">What is <div id ="globe">OneGlobe?</div></h2>
            <p className="lead">In the modern era, the world feels smaller than ever.  
          Anyone can find the information they are looking for with a few taps on their phone or clicks on their computer. 
          You can view resource after resource about any destination anywhere on the globe! 
          But, at OneGlobe we believe there is no substitute for real human interaction. 
          That's why we are committed to bridging differences between people in order to make the world feel a little bit safer for everyone. 
          We hope to bring people together as users explore and make exciting discoveries all over the world. 
          OneGlobe is more than a tourism service, and it is more than a social media platform; OneGlobe is a mechanism for real social change all over the world.</p>

            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Let's explore together.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                OneGlobe	
              </figcaption>
            </figure>

            <p> </p>


      </div>
    </div>


        <div className="modal fade" id="msgModal" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-dark">
              <div className="modal-body">error message here</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="sticky-bottom">
        <nav className="navbar bg-light">
          <div className="container-fluid ">
            <p className="text-muted">&copy;2023 OneGlobe LLC</p>
          </div>
          <div className="container-fluid"><a href="https://github.com/myl15/startup">Github</a>
          </div>
        </nav>
      </footer>

    </div>
  );
}

export default App;
