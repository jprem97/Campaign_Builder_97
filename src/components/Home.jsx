import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "../styles/Home.css";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Real-Time Preview",
    desc: "See every change instantly as you configure your feedback popup.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Fully Customizable",
    desc: "Tailor colors, fonts, and layout to match your brand perfectly.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Actionable Insights",
    desc: "Collect meaningful feedback to improve your product experience.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <nav className="home-nav">
        <div className="nav-logo" onClick={() => navigate("/")}>
          <Logo size={32} />
          <span>Campaign Builder</span>
        </div>
      </nav>

      <main className="home-main">
        <div className="hero-badge">CSAT Made Simple</div>

        <h1 className="hero-title">
          Build Professional
          <br />
          <span>Feedback Experiences</span>
        </h1>

        <p className="hero-subtitle">
          Create clean, effective CSAT popups. Configure content, customize
          styling, and preview everything in real time.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate("/builder")}>
            Start Building
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          
        </div>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-label">Screens</span>
          </div>
          <div className="stat">
            <span className="stat-value">9+</span>
            <span className="stat-label">Style Options</span>
          </div>
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Customizable</span>
          </div>
        </div>

        <div className="features">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        
      </main>

      <footer className="home-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Logo size={22} />
            <span>Campaign Builder</span>
          </div>
          <p>Built with React + Vite</p>
        </div>
      </footer>
    </div>
  );
}
