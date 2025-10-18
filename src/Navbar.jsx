import React from "react";
import './Navbar.css'
export default function navbar() {
    return(
          <section id="hero-section">
      <nav id="navbar" className="layout-width">
        <div className="logo">
          <a href="https://preview.colorlib.com/#videograph" target="_blank">
            <img src="logo.png.webp" alt="logo" />
          </a>
        </div>

        <div className="links">
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">PORTFOLIO</a></li>
          <li><a href="">SERVICES</a></li>
          <li><a href="">PAGES</a></li>
          <li><a href="">CONTACT</a></li>
        </div>

        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-dribbble"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube-play"></i>
        </div>
      </nav>
      <main id="hero-content" className="layout-width">
        <header id="header">
          <button>Menu <i className="fa fa-bars"></i></button>
        </header>
        <div className="hero-content">
          <h5>For website and video editing</h5>
          <h1>Videographer’s Portfolio</h1>
          <button className="glowing-button">SEE MORE ABOUT US</button>
        </div>
        <div className="btns">
          <button>01</button>
          <button>02</button>
          <button>03</button>
        </div>
      </main>
    </section>
    )

}