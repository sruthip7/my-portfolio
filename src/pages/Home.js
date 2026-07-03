import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <nav className="nav">
        <span className="nav-logo">Sruthi Putcha</span>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="/resume2.pdf" target="_blank">Resume</a>

        </div>
      </nav>

      <div className="hero">
        <div className="hero-tag">Available Fall 2026 · Seattle, WA</div>
        <h1>UX Design &<br /><span className="accent">Product Intern</span></h1>
        <p>Informatics student at UW designing experiences grounded in user research, systems thinking, and cross-functional collaboration.</p>
        <div className="hero-btns">
          <a href="#work" className="btn-primary">View work</a>
        </div>
      </div>

      <div className="section" id="work">
        <p className="section-label">Selected work</p>
        <div className="cards">

          <Link to="/smartsort" className="card">
            <div className="card-cover cover-green">
              <img src="/images/smartsort-cover.png" alt="SmartSort" onError={e => e.target.style.display='none'} />
              <span className="card-emoji">♻️</span>
            </div>
            <div className="card-body">
              <p className="card-company">UW INFO 360</p>
              <p className="card-title">SmartSort — campus waste sorting app</p>
              <div className="tags">
                <span className="tag">Field research</span>
                <span className="tag">Figma</span>
                <span className="tag">User testing</span>
              </div>
            </div>
          </Link>

          <Link to="/expedia" className="card">
            <div className="card-cover cover-blue">
              <img src="/images/expedia-cover.png" alt="Expedia" onError={e => e.target.style.display='none'} />
              <span className="card-emoji">✈️</span>
            </div>
            <div className="card-body">
              <p className="card-company">Expedia Group</p>
              <p className="card-title">OneKeyStudent — Gen Z loyalty experience</p>
              <div className="tags">
                <span className="tag">User research</span>
                <span className="tag">Prototyping</span>
                <span className="tag">Validation</span>
              </div>
            </div>
          </Link>

          <Link to="/munchmap" className="card">
          <div className="card-cover cover-peach">
            <img src="/images/munchmap-cover.png" alt="Munch Map" onError={e => e.target.style.display='none'} />
            <span className="card-emoji">🗺️</span>
          </div>
          <div className="card-body">
            <p className="card-company">UW INFO 468</p>
            <p className="card-title">Munch Map — food & mood tracking for college students</p>
            <div className="tags">
              <span className="tag">UX research</span>
              <span className="tag">Systems design</span>
              <span className="tag">Figma</span>
            </div>
          </div>
        </Link>

        </div>
      </div>

      <div className="divider" />

      <div className="about" id="about">
        <div className="avatar">SP</div>
        <div className="about-text">
          <p><strong>Informatics @ UW · 3.83 GPA · Dean's List</strong><br />
          Product-minded builder with experience across SaaS, travel, and sustainability. I’m especially interested in user-centered design and solving ambiguous problems with both creativity and structure.</p>
        </div>
      </div>

      <footer className="footer">
    <div className="footer-links">
    <a href="https://www.linkedin.com/in/sruthi-putcha-7277b3335/" target="_blank" rel="noreferrer">LinkedIn</a>
    <a href="mailto:putchasruthi@gmail.com">Email</a>
    <a href="/resume2.pdf" target="_blank">Resume</a>
  </div>
  <p>© 2026</p>
</footer>
    </div>
  );
}

export default Home;