import { Link } from 'react-router-dom';
import './MunchMap.css';

function MunchMap() {
  return (
    <div className="case-study">
      <Link to="/" className="back-link">← Back</Link>

      <div className="cs-header">
        <div className="cs-tag">UW INFO 468 · Spring 2026</div>
        <h1>Munch Map — helping college students understand how food affects their mood</h1>
        <p>A mobile app that maps students' eating environments, logs meals, and connects food patterns to mood and energy — shifting blame from willpower to structural barriers.</p>
      </div>

      <div className="meta-grid">
        <div className="meta-item"><label>Role</label><p>UX Research & Product</p></div>
        <div className="meta-item"><label>Team</label><p>4 people</p></div>
        <div className="meta-item"><label>Timeline</label><p>12 weeks</p></div>
        <div className="meta-item"><label>Tools</label><p>Figma, VSD framework</p></div>
      </div>

      <div className="cs-section">
        <h2>01 — Problem</h2>
        <h3>Students blame themselves for bad eating habits. The real culprit is their environment.</h3>
        <p>College students frequently experience fatigue, anxiety, and difficulty concentrating — and often attribute it to stress or poor sleep. But research shows diet plays a major role. The disconnect is that students don't recognize the connection, and existing apps assume the problem is knowledge or motivation.</p>
        <div className="highlight-box">
          <p><strong>Design question:</strong> How might we help college students understand the relationship between their eating environment, habits, and wellbeing — without adding guilt or cognitive load?</p>
        </div>
        <p>Our research showed the real barrier isn't willpower — it's access. A student studying in the library from 2–8pm with only a vending machine nearby isn't making a bad choice. They're making the only available one.</p>
      </div>

      <div className="cs-section">
        <h2>02 — Research</h2>
        <h3>Stakeholder mapping, contextual research & Value Sensitive Design</h3>
        <p>We conducted stakeholder research across students, RAs, dining staff, and nutritionists to understand the full ecosystem. We also applied the Value Sensitive Design framework to surface values at stake — privacy, autonomy, self-efficacy, and accessibility — and used these to directly shape our design decisions.</p>
        <div className="highlight-box">
          <p><strong>Key insight:</strong> Current solutions assume the problem is within the user. Our research showed the environment is the primary driver — and designing around that reframe changed everything.</p>
        </div>
      </div>

      <div className="cs-section">
        <h2>03 — Concept</h2>
        <h3>Environment mapping + mood tracking, not calorie counting</h3>
        <p>We explored multiple directions before landing on Munch Map's core concept: map what food options exist in a student's daily radius, tagged by effort and nutrition level, and cross-reference that with mood and energy check-ins to surface patterns over time.</p>
        <div className="stat-row">
          <div className="stat-box"><span className="num">5</span><p>Core features designed and prototyped</p></div>
          <div className="stat-box"><span className="num">9</span><p>Values identified and designed around</p></div>
          <div className="stat-box"><span className="num">0</span><p>Calories tracked — intentionally</p></div>
        </div>
      </div>

      <div className="cs-section">
        <h2>04 — Designs</h2>
        <h3>From onboarding to insights — the full flow</h3>
        <p>The app guides students from setup through daily use: inputting dietary needs, mapping their food environment, logging meals with minimal friction, checking in on mood, and surfacing patterns over time.</p>

        <div className="mm-hero-screen">
          <img src="/images/munchmap-home.png" alt="Munch Map home screen" />
          <div className="mm-hero-caption">
            <h4>Home screen</h4>
            <p>The smart notification at the top is the core of the product — cross-referencing location, schedule, and logged energy to surface a specific, actionable insight rather than generic advice.</p>
          </div>
        </div>

        <div className="mm-screen-grid">
          <div className="mm-screen">
            <img src="/images/munchmap-onboarding.png" alt="Onboarding" />
            <p>Dietary setup</p>
          </div>
          <div className="mm-screen">
            <img src="/images/munchmap-mood.png" alt="Mood check-in" />
            <p>Mood check-in</p>
          </div>
          <div className="mm-screen">
            <img src="/images/munchmap-food.png" alt="Food logging" />
            <p>Meal logging</p>
          </div>
          <div className="mm-screen">
            <img src="/images/munchmap-map.png" alt="Food map" />
            <p>Food map</p>
          </div>
          <div className="mm-screen">
            <img src="/images/munchmap-insights.png" alt="Insights" />
            <p>Insights</p>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2>05 — Design decisions</h2>
        <h3>Three choices that shaped the product</h3>
        <div className="iterations">
          <div className="iteration">
            <div className="iteration-num">1</div>
            <div>
              <h4>No calorie counting</h4>
              <p>Deliberately excluded to reduce guilt and anxiety. The focus is on patterns and environment, not metrics.</p>
            </div>
          </div>
          <div className="iteration">
            <div className="iteration-num">2</div>
            <div>
              <h4>Environment-first framing</h4>
              <p>The food map shows effort and nutrition level of nearby options — making structural barriers visible instead of invisible.</p>
            </div>
          </div>
          <div className="iteration">
            <div className="iteration-num">3</div>
            <div>
              <h4>Privacy controls built in from day one</h4>
              <p>Location tracking is opt-in and customizable at any time. VSD analysis surfaced this as critical early — not an afterthought.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2>06 — Outcomes</h2>
        <h3>A reframe that changes what the product is for</h3>
        <p>The most important design outcome wasn't a feature — it was a reframe. By shifting from "help students eat better" to "help students understand why their environment makes eating well hard," every design decision changed: the copy, the metrics tracked, the notifications, and the onboarding flow.</p>
        <div className="highlight-box">
          <p><strong>Key learning:</strong> The best UX insight from this project came from the VSD process, not user testing. Asking "whose values are at stake?" earlier would have gotten us to the environment-first concept faster.</p>
        </div>
      </div>

      <div className="next-links">
        <Link to="/expedia" className="next-card">
          <label>Previous</label>
          <p>OneKeyStudent ✈️</p>
        </Link>
        <Link to="/smartsort" className="next-card">
          <label>Also</label>
          <p>SmartSort ♻️</p>
        </Link>
      </div>
    </div>
  );
}

export default MunchMap;