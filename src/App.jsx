import ContentTab from "./components/ContentTab";
import { defaultConfig } from "./data/defaultConfig";
import { useState } from "react";

function App() {
  const [config, setConfig] = useState(defaultConfig);

  return (
    <ContentTab
      config={config}
      setConfig={setConfig}
    />
  );
}

export default App;