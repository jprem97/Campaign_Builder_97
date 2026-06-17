import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import defaultConfig from "./data/defaultConfig";
import Home from "./components/Home";
import Logo from "./components/Logo";
import ContentTab from "./components/ContentTab";
import StylingTab from "./components/StylingTab";
import MobilePreview from "./components/MobilePreview";
import "./App.css";

const tabs = ["Content", "Styling"];

function Builder() {
  const [config, setConfig] = useState(defaultConfig);
  const [activeTab, setActiveTab] = useState("Content");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      <div className="left-panel">
        <div className="app-header">
          <div
            className="header-brand"
            onClick={() => navigate("/")}
          >
            <Logo size={34} />
          </div>
          <div className="title-group">
            <h1>Campaign Builder</h1>
            <p>Configure your CSAT feedback popup</p>
          </div>
        </div>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Content" && (
          <ContentTab config={config} setConfig={setConfig} />
        )}
        {activeTab === "Styling" && (
          <StylingTab config={config} setConfig={setConfig} />
        )}

        <button className="theme-toggle" onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
          {theme === "light" ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              Dark Mode
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              Light Mode
            </>
          )}
        </button>
      </div>

      <div className="right-panel">
        <MobilePreview config={config} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<Builder />} />
    </Routes>
  );
}

export default App;
