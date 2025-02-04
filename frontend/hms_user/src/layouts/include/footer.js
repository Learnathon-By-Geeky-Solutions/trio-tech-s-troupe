import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="footer" className="footer-area wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo padding">
              <a href="">
                <img src="/assets/images/logo.png" alt="" />
              </a>
              <p>
                Locavore pork belly scen ester pine est chill wave microdosing
                pop uple itarian cliche artisan.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-info padding">
              <h3>CONTACT US</h3>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" /> PO
                Box 16122 Collins Street West Victoria 8007 Australia
              </p>
              <p>
                <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />{" "}
                info@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> (+1) 800
                123 456
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subcriber-info">
              <h3>SUBSCRIBE</h3>
              <p>
                Get healthy news, tip and solutions to your problems from our
                experts.
              </p>
              <div className="subcriber-box">
                <form id="mc-form" className="mc-form">
                  <div classNameName="newsletter-form">
                    <input
                      type="email"
                      autocomplete="off"
                      id="mc-email"
                      placeholder="Email address"
                      className="form-control"
                      name="EMAIL"
                    />
                    <button className="mc-submit" type="submit">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                    <div className="clearfix"></div>

                    <div className="mailchimp-alerts">
                      <div className="mailchimp-submitting"></div>

                      <div className="mailchimp-success"></div>

                      <div className="mailchimp-error"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
