import React from "react";

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
      <section>
        <h3>Initial Feedback</h3>
        <label>
          Title
          <input
            type="text"
            value={config.initialFeedback.title}
            onChange={(e) => handleChange("initialFeedback", "title", e.target.value)}
          />
        </label>
        <label>
          Subtitle
          <input
            type="text"
            value={config.initialFeedback.subtitle}
            onChange={(e) => handleChange("initialFeedback", "subtitle", e.target.value)}
          />
        </label>
      </section>

      {/* Feedback Page */}
      <section>
        <h3>Feedback Page</h3>
        <label>
          Submit Button Text
          <input
            type="text"
            value={config.feedbackPage.submitButtonText}
            onChange={(e) =>
              handleChange("feedbackPage", "submitButtonText", e.target.value)
            }
          />
        </label>
        <label>
          Additional Comment Toggle
          <input
            type="checkbox"
            checked={config.feedbackPage.additionalCommentToggle}
            onChange={(e) =>
              handleChange("feedbackPage", "additionalCommentToggle", e.target.checked)
            }
          />
        </label>
        <div>
          <h4>Options</h4>
          {config.feedbackPage.options.map((option, index) => (
            <div key={index} className="option-row">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              <button type="button" onClick={() => deleteOption(index)}>
                Delete Option
              </button>
            </div>
          ))}
          <button type="button" onClick={addOption}>
            Add Option
          </button>
        </div>
      </section>

      {/* Thank You Page */}
      <section>
        <h3>Thank You Page</h3>
        <label>
          Media Upload
          <input
            type="file"
            onChange={(e) =>
              handleChange("thankYouPage", "media", e.target.files[0])
            }
          />
        </label>
        <label>
          Title
          <input
            type="text"
            value={config.thankYouPage.title}
            onChange={(e) => handleChange("thankYouPage", "title", e.target.value)}
          />
        </label>
        <label>
          Subtitle
          <input
            type="text"
            value={config.thankYouPage.subtitle}
            onChange={(e) =>
              handleChange("thankYouPage", "subtitle", e.target.value)
            }
          />
        </label>
        <label>
          Button Text
          <input
            type="text"
            value={config.thankYouPage.buttonText}
            onChange={(e) =>
              handleChange("thankYouPage", "buttonText", e.target.value)
            }
          />
        </label>
      </section>
    </div>
  );
}

export default ContentTab;
