import React from "react";
import './bottom-section.css'
export default function BottomSection(){
    return (
         <nav id="bottom-section">
      <div className="bottom-width">
        <div className="bottom">
          <a href="https://preview.colorlib.com/#videograph">
            <img src="logo.png.webp" alt="" />
          </a>
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-dribbble"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube-play"></i>
        </div>
      </div>

      <div className="footer">
        <div className="about-us">
          <h2>About us</h2>
          <p>
            Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
            award-winning, full-service production company specializing.
          </p>
          <button>READ MORE</button>
        </div>
        <div className="who">
          <h2>Who we are</h2>
          <a href="#">Team</a>
          <a href="#">Carres</a>
          <a href="#">Contact us</a>
          <a href="#">Location</a>
        </div>
        <div className="our-work">
          <h2>Our work</h2>
          <a href="">Feature</a>
          <a href="">Latest</a>
          <a href="">Browse Archive</a>
          <a href="">Video for web</a>
        </div>
        <div className="news-letter">
          <h2>Newsletter</h2>
          <p>
            Videoprah is an award-winning, full-service production company
            specializing.
          </p>
          <input type="email" placeholder="Email" /> <i className="fa fa-send"></i>
        </div>
      </div>
      <div className="copy-right">
        <p>
          Copyright © 2025 All rights reserved | This template is made with by
          <a href="https://colorlib.com/wp/cat/bootstrap/" target="_blank">Colarib</a>
        </p>
      </div>
    </nav>
    )
}