import React from "react";
import './Content.css'
export default function Content() {
    return (
         <section id="second-section">
      <div id="content">
        <div className="left-content">
          <h5>OUR SERVICES</h5>
          {/* <h1><span>WHAT</span> TO DO?</h1>  */}
          <h1><span className="span1">WHAT</span> TO DO?</h1>
          <p>
            If you hire a videographer of our team you will get a video
            professional to make a custom video for your business and, once the
            project is over.
          </p>
          {/* <button>VIEW ALL SERVICES</button>  */}
          <button className="morphing-button">
            <span>VIEW ALL SERVICES</span>
          </button>
        </div>

        <div className="right-content">
          <div id="motion-graph" className="right_card">
            <img src="si-1.png.webp" alt="Motion Graphics" />
            <h2>Motion-graphics</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>
          <div id="Script-writing" className="right_card">
            <img src="si-2.png.webp" alt="Scriptwriting" />
            <h2>Scriptwriting and editing</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>

          <div id="video-distribution" className="right_card">
            <img src="si-3.png.webp" alt="Video Distribution" />
            <h2>Video distribution</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>
          <div id="Video-hosting" className="right_card">
            <img src="si-4.png.webp" alt="Video Hosting" />
            <h2>Video hosting</h2>
            <p>
              Whether you’re halfway through the editing process, or you haven’t
              even started, our post production services can put the finishing
              touches.
            </p>
          </div>
        </div>
      </div>
    </section>

    )
    
}