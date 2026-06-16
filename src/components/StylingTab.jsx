
import "../styles/StylingTab.css";

const colorFields = [
  { label: "Background Color", key: "backgroundColor" },
  { label: "Title Color", key: "titleColor" },
  { label: "Subtitle Color", key: "subtitleColor" },
  { label: "Button Color", key: "buttonColor" },
  { label: "Button Text Color", key: "buttonTextColor" },
  { label: "Selected Rating Color", key: "selectedRatingColor" },
  { label: "Unselected Rating Color", key: "unselectedRatingColor" },
];

const textFields = [
  { label: "Font Size", key: "fontSize", placeholder: "e.g. 16px" },
  { label: "Font Weight", key: "fontWeight", placeholder: "e.g. 400" },
  { label: "Border Radius", key: "borderRadius", placeholder: "e.g. 8px" },
  { label: "Button Width", key: "buttonWidth", placeholder: "e.g. 100%" },
  { label: "Button Height", key: "buttonHeight", placeholder: "e.g. 48px" },
];

function StylingTab({ config, setConfig }) {
  const handleChange = (field, value) => {
    setConfig({
      ...config,
      styling: {
        ...config.styling,
        [field]: value,
      },
    });
  };

  return (
    <div className="styling-tab">
      <section className="section">
        <h3>Colors</h3>
        {colorFields.map(({ label, key }) => (
          <div key={key} className="form-group toggle">
            <label>{label}</label>
            <div className="color-inputs">
              <input
                type="color"
                value={config.styling[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />
              <input
                type="text"
                value={config.styling[key]}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h3>Dimensions</h3>
        {textFields.map(({ label, key, placeholder }) => (
          <div key={key} className="form-group">
            <label>{label}</label>
            <input
              type="text"
              value={config.styling[key]}
              placeholder={placeholder}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default StylingTab;
