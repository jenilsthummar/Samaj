import React from "react";
import {  FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import '../style/Footer.css'

const Footer = () => {
  return (
    <>
          <footer><hr/>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Shree Leua Patel Samaj</h3>
              <p> Event details or additional text goes here. Event  <br/>additional text goes here. Event details or additiona   <br/> Event details or additional text goes here.</p>
            </div>
            <div className="footer-subscribe">
              <h3>Policy Pages</h3>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Refund Policy</p>
            </div>
            <div className="footer-social">
              <h3>Social Media</h3>
              <div className="footer-social--icons">
                <div>
                  <FaLinkedin className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                 <FaYoutube className="icons" />
            
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>+91 90237 88393</p>
              <p>dhruv@asquaretechlab.com</p>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="bottom">
              <p>
                @ copyright 2024 Shree Leua Patel Samaj.All Rights Reserved.<span> Design By Asquare Tech Lab LLP.</span>
              </p>
            </div>
          </div>
        </footer>
    </>
  );
};

export default Footer;