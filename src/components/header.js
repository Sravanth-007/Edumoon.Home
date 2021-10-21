import React, { Component } from 'react'



export default class Header extends Component {
    render() {
        return (
         <div>

  <header className="header">

    <div className="top_bar">
        <div className="top_bar_container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div style={{position: "fixed" }}className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                            <ul className="top_bar_contact_list">
                                <li><div className="question">Have any questions?</div></li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div>+91-8555899332</div>
                                </li>
                                <li>
                                    <i className="bx bx-envelope" aria-hidden="true"></i>
                                    <div>edumoonhelpdesk@gmail.com</div>
                                     
                                </li>
                            </ul>
                           
                        </div>
                        <a style={{float: "right" , backgroundColor: "aliceblue"}}href="lms/">Register or Login</a>
                    </div>
                    
                </div>
                
            </div>
          
        </div>				
    </div>

    <div  className="header_container">
        <div  className="container">
          <div  className="row">
            <div   className="col">
              <div  
                className="
                  header_content
                  d-flex
                  flex-row
                  align-items-center
                  justify-content-start
                "
              >
                <div  className="logo_container">
                  <a   href="#">
                    <div   className="logo_text">Edu<span>Moon</span></div>
                  </a>
                </div>
                <nav   className="main_nav_container ml-auto">
                  <ul  className="main_nav">
                    <li  ><a href="index.php">Home</a></li>
                    <li><a href="lms/video%20tutorials/java/display_video_courses.php">Courses</a></li>
                    <li><a href="lms/">Resources</a></li>
                    <li><a href="blog.php">Blog</a></li>
                    <li><a href="index.html">Events</a></li>
                     <li><a href="gallery.php">Gallery</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="campus-ambassador.php">Campus Ambassador</a></li>
                    <div className="shopping_cart">
                      <a href="lms/login/logout.php"><i className="bx bx-log-out" aria-hidden="true"></i></a>
                    </div>
                  </ul>
                 
                  
                  <i className="fa fa-bars menu_mm" style={{float: "right",marginTop: "4px",marginLeft:"30px"}} id="btn"   ></i>

                  <div className="hamburger menu_mm">
                    
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="header_search_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="
                  header_search_content
                  d-flex
                  flex-row
                  align-items-center
                  justify-content-end
                "
              >
                <form action="#" className="header_search_form">
                  <input
                    type="search"
                    className="search_input"
                    placeholder="Search"
                    required="required"
                  />
                  <button
                    className="
                      header_search_button
                      d-flex
                      flex-column
                      align-items-center
                      justify-content-center
                    "
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <h1>hi</h1>


         </div>
        );
    }
}
