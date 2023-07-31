import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Bottom() {
  return (
    <>
    
  <p className="border-bottom border-5 mt-5"></p>
  <div className="container mt-5 mb-5 ">
    <footer className="text-center text-lg-start  text-muted mt-5">
      {/* <!-- Section: Social media --> */}
      <section className="d-flex justify-content-center justify-content-lg-between ">
        {/* <!-- Left --> */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <FontAwesomeIcon icon="fa-light fa-jug-bottle"  />
        <div className="">
          <a href="https://www.facebook.com/" className="me-4 text-reset"><FontAwesomeIcon icon={faFacebook} size="2xl"/></a>
          <a href="https://twitter.com/srh_abhay" className="me-4 text-reset"><FontAwesomeIcon icon={faTwitter} size="2xl" /></a>
          <a href="https://www.instagram.com/" className="me-4 text-reset"><FontAwesomeIcon icon={faInstagram} size="2xl"/></a>
          <a href="hhttps://www.linkedin.com/in/abhay-kumar-pandey-1124ba205/" className="me-4 text-reset"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
          <a href="https://github.com/050abhay" className="me-4 text-reset"><FontAwesomeIcon icon={faGithub} size="2xl"/></a>
        </div>
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}


      {/* <!-- Copyright --> */}
      <div className="text-center mt-5">
        <a  className="text-muted" href="./layout/Devloper.html" target="_blank">© 2023 Copyright:@</a>

      </div>
      {/* <!-- Copyright --> */}
    </footer>
   
  </div>
  
    </>
  )
}
