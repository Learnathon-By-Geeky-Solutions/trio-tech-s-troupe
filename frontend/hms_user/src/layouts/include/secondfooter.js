import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGooglePlusG, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';

function SecondFooter() {
  return (
    <>
      <div className="copyright-area wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="footer-text">
                 
              </div>
            </div>
            <div className="col-md-4">
              <div className="social">
                <ul className="social-links">
                  <li><a href=""><FontAwesomeIcon icon={faRss} aria-hidden="true" /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faFacebook} aria-hidden="true" /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faTwitter} aria-hidden="true" /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faGooglePlusG} aria-hidden="true" /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faYoutube} aria-hidden="true" /></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faPinterest} aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#home" data-scroll className="dmtop global-radius"><FontAwesomeIcon icon={faAngleUp} aria-hidden="true" /></a>
    </>
  )
}

export default SecondFooter;
