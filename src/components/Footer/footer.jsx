/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Offiicial Address</h6>
                    <p>
                      Minhaj Ghori Road, Nazimabad No.4 Block 4, Karachi Pakistan
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@kodexolabs.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>021 36720047</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/img/blog/1.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date">14 sep 2021</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/blog/2.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span className="date">14 sep 2021</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>  */}
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/kodexo.png" style={{ width: "200px" }} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/kodexolabs/"
                  className="icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a> */}
                {/* <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Kodexo Labs. All Rights Reserved.
                  {/* <a href="#0">ThemesCamp</a>. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
