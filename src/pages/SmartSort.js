import { Link } from 'react-router-dom';
import './SmartSort.css';

function SmartSort() {
  return (
    <div className="case-study">
      <Link to="/" className="back-link">← Back</Link>

      <div className="cs-header">
        <div className="cs-tag">UW INFO 360 · Spring 2025</div>
        <h1>SmartSort — reducing campus waste contamination through real-time guidance</h1>
        <p>A mobile app that uses QR scanning and image recognition to help UW students sort waste correctly at the moment of disposal.</p>
      </div>

      <div className="meta-grid">
        <div className="meta-item"><label>Role</label><p>UX Researcher & Designer</p></div>
        <div className="meta-item"><label>Team</label><p>3 people</p></div>
        <div className="meta-item"><label>Timeline</label><p>10 weeks</p></div>
        <div className="meta-item"><label>Tools</label><p>Figma, contextual inquiry, surveys</p></div>
      </div>

      <div className="cs-section">
        <h2>01 — Problem</h2>
        <h3>Students want to sort correctly — the system makes it hard</h3>
        <p>UW generates significant campus waste daily. Despite compost, recycling, and landfill bins at every high-traffic area, contamination rates remain high — not because students don't care, but because bin labels are unclear and packaging is confusing.</p>
        <div className="highlight-box">
          <p><strong>Design question:</strong> How can we reduce sorting confusion for students at the exact moment they're about to throw something away?</p>
        </div>
      </div>

      <div className="cs-section">
        <h2>02 — Research</h2>
        <h3>5 contextual inquiries across campus dining halls</h3>
        <p>We followed Nielsen Norman Group's contextual inquiry model, observing students at real disposal moments across the HUB, Alder Hall, Health Sciences, and Center Table dining hall. We then conducted follow-up interviews to understand their decision-making process.</p>
        <p>Every participant showed hesitation, confusion, or mis-sorting — even those who actively tried to sort correctly. The pattern was clear: <strong>the problem is the system, not the students.</strong></p>

        <div className="personas">
          <div className="persona-card">
            <div className="persona-avatar">S</div>
            <h4>Saanvi, 19</h4>
            <p>On-campus resident. Confused by labels, relies on visual cues. Mis-sorted a compostable tray into recycling.</p>
          </div>
          <div className="persona-card">
            <div className="persona-avatar">G</div>
            <h4>Geo, 21</h4>
            <p>RA in residence hall. Motivated by sustainability education. Wants tools he can teach to residents.</p>
          </div>
          <div className="persona-card">
            <div className="persona-avatar">N</div>
            <h4>Nicole, 18</h4>
            <p>On-campus resident. Pauses and double-checks before sorting. Signage alone isn't enough for her.</p>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2>03 — Concepts</h2>
        <h3>Three directions, one clear winner</h3>
        <p>We explored three concepts targeting the same intervention point — the moment of disposal.</p>

        <div className="concepts">
          <div className="concept-card">
            <h4>Bin station screens</h4>
            <p>Physical kiosks with cameras at each bin station. High impact, but expensive and hard to scale.</p>
          </div>
          <div className="concept-card">
            <h4>Gamified sorting</h4>
            <p>Points and leaderboards for correct sorting. Strong motivation but weak at the decision moment.</p>
          </div>
          <div className="concept-card selected">
            <div className="concept-badge">Selected</div>
            <h4>QR scanning app</h4>
            <p>Scan any item via QR code at the bin, get instant guidance. Scalable, cost-effective, educational.</p>
          </div>
        </div>

        <p>We chose the QR scanning approach for its balance of usability, scalability, and educational potential — it works within existing campus infrastructure with no hardware changes required.</p>
      </div>

      <div className="cs-section">
    <h2>04 — Prototype</h2>
    <h3>Low-fi to mid-fi in Figma</h3>
    <p>We started with sketches, moved to low-fidelity wireframes, then built a mid-fidelity Figma prototype focused on role and look-and-feel — testing the core scan → result → learn flow before committing to visual design.</p>

    <div className="phone-grid">
      <div className="phone-frame">
        <img src="/images/ss-scan.png" alt="Scanning screen" />
        <p>Scan interface</p>
      </div>
      <div className="phone-frame">
        <img src="/images/ss-result.png" alt="Bin placement result" />
        <p>Bin result</p>
      </div>
      <div className="phone-frame">
        <img src="/images/ss-funfact.png" alt="Fun fact popup" />
        <p>Fun fact popup</p>
      </div>
      <div className="phone-frame">
        <img src="/images/ss-leaderboard.png" alt="Leaderboard" />
        <p>Leaderboard</p>
      </div>
      <div className="phone-frame">
        <img src="/images/ss-rewards.png" alt="Rewards" />
        <p>Rewards</p>
      </div>
    </div>
  </div>

      <div className="cs-section">
        <h2>05 — Testing</h2>
        <h3>Behavioral analysis + surveys with 5 participants</h3>
        <p>We gave each participant 5 common dining hall items and asked them to sort using SmartSort while thinking aloud. Afterward, they completed a Likert-scale and open-ended survey.</p>
        <div className="highlight-box">
          <p><strong>Key finding:</strong> Users felt more confident sorting after using SmartSort, but wanted the app to teach them — not just tell them. "It doesn't help me remember for next time" was a recurring theme.</p>
        </div>
      </div>

      <div className="cs-section">
        <h2>06 — Iterations</h2>
        <h3>Three key changes driven by user feedback</h3>
        <div className="iterations">
          <div className="iteration">
            <div className="iteration-num">1</div>
            <div>
              <h4>Fun fact pop-ups</h4>
              <p>Added educational facts after each scan result to build long-term knowledge, not just one-time guidance.</p>
            </div>
          </div>
          <div className="iteration">
            <div className="iteration-num">2</div>
            <div>
              <h4>Starbucks rewards integration</h4>
              <p>Introduced points redeemable for sustainable prizes at UW Starbucks locations, driven by student motivation data.</p>
            </div>
          </div>
          <div className="iteration">
            <div className="iteration-num">3</div>
            <div>
              <h4>Residence hall leaderboard</h4>
              <p>Added hall-level competition after RAs suggested group accountability as a stronger motivator than individual points.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2>07 — Outcomes</h2>
        <div className="outcomes">
          <div className="outcome-stat"><span className="num">5</span><p>Contextual inquiries conducted across campus</p></div>
          <div className="outcome-stat"><span className="num">3</span><p>Design concepts explored and evaluated</p></div>
          <div className="outcome-stat"><span className="num">30%</span><p>Target reduction in bin contamination rates</p></div>
        </div>
        <p>All 5 test users reported feeling more confident sorting waste after using SmartSort. The biggest takeaway: real-time guidance alone isn't enough, the design needs to build habits over time, not just answer one-off questions.</p>
      </div>

      <div className="next-links">
        <Link to="/expedia" className="next-card">
          <label>Next project</label>
          <p>OneKeyStudent — Expedia ✈️</p>
        </Link>
        <Link to="/munchmap" className="next-card">
          <label>Also</label>
          <p>MunchMap🗺️</p>
        </Link>
      </div>
    </div>
  );
}

export default SmartSort;