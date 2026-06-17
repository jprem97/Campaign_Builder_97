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
    title: "Instant Preview",
    desc: "Watch your popup come to life on a mobile frame as you tweak every setting.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Pixel-Perfect Control",
    desc: "Colors, fonts, borders, spacing — every detail is yours to command.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Rich Media Support",
    desc: "Drop in images, GIFs, or Lottie animations to make your feedback pop.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Animated Ratings",
    desc: "Swap static emojis for custom Lottie animations at every rating level.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Dark Mode",
    desc: "Switch to a darker palette for comfortable late-night crafting sessions.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 12 15 15" />
      </svg>
    ),
    title: "PDF Export",
    desc: "Download all three screens as a polished PDF or present them fullscreen.",
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
        <div className="hero-badge">Feedback Maker</div>

        <h1 className="hero-title">
          Design Feedback
          <br />
          <span>That People Love</span>
        </h1>

        <p className="hero-subtitle">
          Craft stunning CSAT popups with animated ratings, custom media, and
          pixel-perfect styling — all previewed live on a real mobile frame.
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
            <span className="stat-value">12+</span>
            <span className="stat-label">Style Controls</span>
          </div>
          <div className="stat">
            <span className="stat-value">Real-Time</span>
            <span className="stat-label">Preview</span>
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
          <p>Crafted with React + Vite</p>
        </div>
      </footer>
    </div>
  );
}
