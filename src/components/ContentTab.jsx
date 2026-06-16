
import "../styles/ContentTab.css";

function ContentTab({ config, setConfig }) {
  const handleChange = (section, field, value) => {
    setConfig({
      ...config,
      [section]: {
        ...config[section],
        [field]: value,
      },
    });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...config.feedbackPage.options];
    newOptions[index] = value;
    handleChange("feedbackPage", "options", newOptions);
  };

  const addOption = () => {
    handleChange("feedbackPage", "options", [
      ...config.feedbackPage.options,
      "",
    ]);
  };

  const deleteOption = (index) => {
    const newOptions = config.feedbackPage.options.filter((_, i) => i !== index);
    handleChange("feedbackPage", "options", newOptions);
  };

  return (
    <div className="content-tab">
      {/* Initial Feedback */}
      <section className="section">
        <h3>Initial Feedback</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={config.initialFeedback.title}
            onChange={(e) => handleChange("initialFeedback", "title", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Subtitle</label>
          <input
            type="text"
            value={config.initialFeedback.subtitle}
            onChange={(e) => handleChange("initialFeedback", "subtitle", e.target.value)}
          />
        </div>
      </section>

      {/* Feedback Page */}
      <section className="section">
        <h3>Feedback Page</h3>
        <div className="form-group">
          <label>Submit Button Text</label>
          <input
            type="text"
            value={config.feedbackPage.submitButtonText}
            onChange={(e) =>
              handleChange("feedbackPage", "submitButtonText", e.target.value)
            }
          />
        </div>
        <div className="form-group toggle">
          <label>Additional Comment Toggle</label>
          <input
            type="checkbox"
            checked={config.feedbackPage.additionalCommentToggle}
            onChange={(e) =>
              handleChange("feedbackPage", "additionalCommentToggle", e.target.checked)
            }
          />
        </div>
        <div className="form-group">
          <label>Options</label>
          {config.feedbackPage.options.map((option, index) => (
            <div key={index} className="option-row">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              <button className="delete-btn" type="button" onClick={() => deleteOption(index)}>
                ×
              </button>
            </div>
          ))}
          <button className="add-btn" type="button" onClick={addOption}>
            + Add Option
          </button>
        </div>
      </section>

      {/* Thank You Page */}
      <section className="section">
        <h3>Thank You Page</h3>
        <div className="form-group">
          <label>Media Upload</label>
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.gif,.json"
            onChange={(e) =>
              handleChange("thankYouPage", "media", e.target.files[0])
            }
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={config.thankYouPage.title}
            onChange={(e) => handleChange("thankYouPage", "title", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Subtitle</label>
          <input
            type="text"
            value={config.thankYouPage.subtitle}
            onChange={(e) =>
              handleChange("thankYouPage", "subtitle", e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Button Text</label>
          <input
            type="text"
            value={config.thankYouPage.buttonText}
            onChange={(e) =>
              handleChange("thankYouPage", "buttonText", e.target.value)
            }
          />
        </div>
      </section>
    </div>
  );
}

export default ContentTab;
