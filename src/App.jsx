import { useState } from "react";
import defaultConfig from "./data/defaultConfig";
import ContentTab from "./components/ContentTab";
import StylingTab from "./components/StylingTab";
import MobilePreview from "./components/MobilePreview";
import "./App.css";

const tabs = ["Content", "Styling"];

function App() {
  const [config, setConfig] = useState(defaultConfig);
  const [activeTab, setActiveTab] = useState("Content");

  return (
    <div className="app">
      <div className="left-panel">
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

export default App;
