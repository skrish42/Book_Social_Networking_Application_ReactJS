import React from "react";
import "./aboutus.css";


const AboutUs = () => {
  return (
    <div>
      <div className="text-secondary p-2 ">
        
          <div className="titleabout fw-bold text-center">
            <h2>
              About <b>BookHub</b>
            </h2>
          </div>
          </div>
            <div className="about mx-auto">
              <div className="about-item">
                <h4 className="mx-3">BookHub</h4>
                <p className="mx-auto pt-5">Welcome to BookHub, where book lovers unite to explore, connect, and share their passion for reading. Discover a vast library of literary treasures, from classic to contemporary. Join our vibrant community of bibliophiles, discuss your favorite titles, and make new friends who share your love for the written word. Whether you're seeking your next great read or a place to discuss your latest literary adventure, you've found your haven here at BookHub. </p>
              </div>
              <div className="about-item">
                <h4 className="mx-3">Technologies used</h4>
                <ul className="mx-4">
                  <li>React JS</li>
                  <li>Framer Motion Library</li>
                  <li>CSS</li>
                  <li>Bootstrap 5</li>
                </ul>
              </div>
              <div className="about-item">
                <h4 className="mx-3">Follow me on</h4>
                <section className="mx-auto" >
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/peter-rezik-a84408123/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/PeterRizek009" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                </section>
              </div>

              <div className="about-item">
                <h4 className="mx-3">Our Contact</h4>
              </div>
            </div>
        </div>


  
  );
}


export default AboutUs;
