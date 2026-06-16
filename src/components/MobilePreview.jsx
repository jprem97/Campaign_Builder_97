import { useState } from "react";
import Rating from "./Rating";
import "../styles/MobilePreview.css";

function InitialScreen({ config, styling }) {
  return (
    <div className="preview-content">
      <h2 style={{ fontSize: styling.fontSize, fontWeight: styling.fontWeight, color: styling.titleColor, margin: 0 }}>
        {config.initialFeedback.title}
      </h2>
      <p style={{ fontSize: "13px", color: styling.subtitleColor, margin: 0 }}>
        {config.initialFeedback.subtitle}
      </p>
      <Rating styling={styling} />
    </div>
  );
}

function FeedbackScreen({ config, styling }) {
  const [comment, setComment] = useState("");

  return (
    <div className="preview-content" style={{ justifyContent: "flex-start", padding: "28px 24px", gap: "20px" }}>
      <h3 style={{ fontSize: "15px", fontWeight: 600, color: styling.titleColor, margin: 0 }}>
        Tell us more
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
        {config.feedbackPage.options.map((opt, i) => (
          <label
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              border: `1px solid ${styling.unselectedRatingColor}`,
              borderRadius: styling.borderRadius,
              fontSize: "13px",
              color: styling.titleColor,
              cursor: "pointer",
              transition: "border-color 0.2s ease",
            }}
          >
            <input type="radio" name="feedback-option" style={{ accentColor: styling.buttonColor }} />
            {opt}
          </label>
        ))}
      </div>

      {config.feedbackPage.additionalCommentToggle && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
          <label style={{ fontSize: "12px", fontWeight: 500, color: styling.subtitleColor, textAlign: "left" }}>
            Additional comments
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type here..."
            style={{
              width: "100%",
              minHeight: "72px",
              padding: "10px 12px",
              fontSize: "13px",
              fontFamily: "inherit",
              color: styling.titleColor,
              border: `1px solid ${styling.unselectedRatingColor}`,
              borderRadius: styling.borderRadius,
              resize: "vertical",
              outline: "none",
            }}
          />
        </div>
      )}

      <button
        className="preview-btn"
        style={{
          width: styling.buttonWidth,
          height: styling.buttonHeight,
          background: styling.buttonColor,
          color: styling.buttonTextColor,
          borderRadius: styling.borderRadius,
        }}
      >
        {config.feedbackPage.submitButtonText}
      </button>
    </div>
  );
}

function ThankYouScreen({ config, styling }) {
  return (
    <div className="preview-content">
      <div style={{ fontSize: "40px" }}>✅</div>
      <h2 style={{ fontSize: styling.fontSize, fontWeight: styling.fontWeight, color: styling.titleColor, margin: 0 }}>
        {config.thankYouPage.title}
      </h2>
      <p style={{ fontSize: "13px", color: styling.subtitleColor, margin: 0 }}>
        {config.thankYouPage.subtitle}
      </p>

      {config.thankYouPage.media && (
        <div style={{ marginTop: "8px", width: "100%", display: "flex", justifyContent: "center" }}>
          <img
            src={URL.createObjectURL(config.thankYouPage.media)}
            alt="Uploaded media"
            style={{ maxWidth: "100%", maxHeight: "120px", borderRadius: styling.borderRadius, objectFit: "contain" }}
          />
        </div>
      )}

      <button
        className="preview-btn"
        style={{
          width: styling.buttonWidth,
          height: styling.buttonHeight,
          background: styling.buttonColor,
          color: styling.buttonTextColor,
          borderRadius: styling.borderRadius,
          marginTop: "8px",
        }}
      >
        {config.thankYouPage.buttonText}
      </button>
    </div>
  );
}

const screens = [InitialScreen, FeedbackScreen, ThankYouScreen];

export default function MobilePreview({ config }) {
  const [current, setCurrent] = useState(0);
  const { styling } = config;
  const Screen = screens[current];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      <div className="phone" style={{ background: styling.backgroundColor }}>
        <div className="phone-screen">
          <Screen config={config} styling={styling} />
        </div>
      </div>

      <div className="preview-nav">
        <button disabled={current === 0} onClick={() => setCurrent((p) => p - 1)}>
          ← Previous
        </button>
        <span>{current + 1} / 3</span>
        <button disabled={current === 2} onClick={() => setCurrent((p) => p + 1)}>
          Next →
        </button>
      </div>
    </div>
  );
}
