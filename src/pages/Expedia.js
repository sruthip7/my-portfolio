import { Link } from 'react-router-dom';
import './Expedia.css';

function Expedia() {
  return (
    <div className="case-study">
      <Link to="/" className="back-link">← Back</Link>

      <div className="cs-header">
        <div className="cs-tag">Expedia Group · Jan–Mar 2026</div>
        <h1>OneKeyStudent — designing a loyalty experience for Gen Z travelers</h1>
        <p>End-to-end UX research and prototype design for a student loyalty program projected to drive 20% Gen Z acquisition growth for Expedia.</p>
      </div>

      <div className="meta-grid">
        <div className="meta-item"><label>Role</label><p>Product Manager & UX Lead</p></div>
        <div className="meta-item"><label>Team</label><p>6 people</p></div>
        <div className="meta-item"><label>Timeline</label><p>10 weeks</p></div>
        <div className="meta-item"><label>Tools</label><p>Figma, surveys, interviews</p></div>
      </div>

      <div className="cs-section">
        <h2>01 — Problem</h2>
        <h3>Expedia was losing Gen Z to competitors before the first booking</h3>
        <p>Gen Z travelers are the fastest growing segment in travel, but Expedia had no targeted acquisition strategy for students. Existing loyalty programs weren't designed around student budgets, booking behaviors, or the platforms they actually use.</p>
        <div className="highlight-box">
          <p><strong>Design question:</strong> What loyalty experience would earn Gen Z's first booking on Expedia — and keep them coming back?</p>
        </div>
      </div>

      <div className="cs-section">
        <h2>02 — Research</h2>
        <h3>100+ users, surveys, interviews, and competitive audits</h3>
        <p>We ran a mixed-methods research sprint to understand how Gen Z actually books travel — what they trust, what they avoid, and where Expedia fit into their mental model.</p>
        <div className="stat-row">
          <div className="stat-box"><span className="num">100+</span><p>Students surveyed and interviewed</p></div>
          <div className="stat-box"><span className="num">3</span><p>Competitive audits across travel platforms</p></div>
          <div className="stat-box"><span className="num">1</span><p>Clear entry point: flights</p></div>
        </div>
        <p>Research consistently pointed to flights as the highest-anxiety, highest-frequency booking category for students. It became our entry point — the moment where guidance and rewards would have the most impact.</p>
      </div>

      <div className="cs-section">
        <h2>03 — Process</h2>
        <h3>From research to validated prototype in 6 weeks</h3>
        <div className="process-steps">
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <h4>Synthesis & focus</h4>
              <p>Analyzed survey and interview data to identify flights as the Gen Z acquisition entry point over hotels or packages.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div>
              <h4>Concept definition</h4>
              <p>Defined OneKeyStudent — a student loyalty program with curated flight deals, OneKeyCash onboarding, and student verification.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div>
              <h4>Figma prototype</h4>
              <p>Built interactive prototypes covering the onboarding flow, deal discovery, and OneKeyCash earning and redemption.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div>
              <h4>Validation</h4>
              <p>Tested with an internal Expedia panel, gathered structured feedback, and iterated on friction points in the onboarding flow.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div>
              <h4>Stakeholder presentation</h4>
              <p>Delivered final recommendation to Expedia leadership with projected impact of 20% Gen Z acquisition growth.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2>04 — Prototype</h2>
        <h3>Figma designs — onboarding & deal discovery</h3>
        <p>The prototype covered the full student journey: discovering the program, verifying student status, and landing on curated deals.</p>
        <div className="prototype-grid">
          <div className="proto-frame proto-full">
            <img src="/images/expedia-deals.png" alt="Spring Break deals carousel" />
            <p>Curated deals carousel</p>
          </div>
          <div className="proto-row">
            <div className="proto-frame">
              <img src="/images/expedia-verify.png" alt="Email verification flow" />
              <p>Student verification flow</p>
            </div>
            <div className="proto-frame">
              <img src="/images/expedia-confirmed.png" alt="Student status confirmed" />
              <p>Benefits activated</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2>05 — Outcomes</h2>
        <h3>Validated and shipped to leadership</h3>
        <p>The OneKeyStudent recommendation was validated through the internal Expedia panel and presented to leadership. The program was projected to drive 20% Gen Z acquisition growth by targeting students at their highest-intent travel moment — booking flights.</p>
        <div className="highlight-box">
          <p><strong>Key learning:</strong> Gen Z doesn't distrust loyalty programs — they distrust complexity. The biggest design win was simplifying OneKeyCash into a single "earn on flights, spend anywhere" message during onboarding.</p>
        </div>
      </div>

      <div className="next-links">
        <Link to="/smartsort" className="next-card">
          <label>Previous</label>
          <p>SmartSort ♻️</p>
        </Link>
        <Link to="/munchmap" className="next-card">
          <label>Next project</label>
          <p>MuchMap🗺️</p>
        </Link>
      </div>
    </div>
  );
}

export default Expedia;