import './third-section.css'
export default function ThirdSection() {
    return (
          <section id="third-section">
      <div className="gallery">
        <div class="gallery-item">
          <img src="work-1.jpg.webp" alt="" />
        </div>
        <div className="gallery-item">
          <img src="work-2.jpg.webp" alt="" />
        </div>
        <div className="gallery-item">
          <img src="work-3.jpg.webp" alt="" />
        </div>
        <div className="gallery-item">
          <img src="work-4.jpg.webp" alt="" />
        </div>
        <div className="gallery-item">
          <img src="work-5.jpg.webp" alt="" />
        </div>
        <div className="gallery-item">
          <img src="work-6.jpg.webp" alt="" />
        </div>
        <div className="gallery-item right-image">
          <img className="right-image" src="work-7.jpg.webp" alt="" />
        </div>
      </div>
    </section>
    )
}