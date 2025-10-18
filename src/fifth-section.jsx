import React from "react";
import './fifth-section.css'
export default function FifthSection() {
    return (
          <section id="fifth-section">
      <div className="container">
        <div className="fifth-content">
          <h3>NICE TO MEET</h3>
          <h2><span>OUR</span> TEAM</h2>
        </div>
        <div className="team-wrapper">
          <div className="images">
            <img src="team-1.jpg.webp" alt="" />
          </div>
          <div className="images">
            <img src="team-2.jpg.webp" alt="" />
          </div>
          <div className="images">
            <img src="team-3.jpg.webp" alt="" />
          </div>
          <div className="images">
            <img src="team-4.jpg.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="meet-btn">
        <button>MEET OUR TEAM</button>
      </div>
    </section>
    )
}