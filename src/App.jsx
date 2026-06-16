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
  const navigate = useNavigate();

  return (
    <div className="app">
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
