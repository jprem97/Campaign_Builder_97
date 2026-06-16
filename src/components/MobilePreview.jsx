import { useState } from "react";
import Rating from "./Rating";

const phoneStyle = {
  width: "320px",
  height: "580px",
  borderRadius: "32px",
  border: "8px solid #1a1a2e",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
  position: "relative",
  background: "#ffffff",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 20px",
  borderTop: "1px solid #f3f4f6",
};

const navBtnStyle = (disabled) => ({
  padding: "8px 16px",
  fontSize: "13px",
  fontWeight: 500,
  border: "none",
  borderRadius: "6px",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.4 : 1,
  background: "#f3f4f6",
  color: "#374151",
});

function InitialScreen({ config, styling }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", gap: "12px" }}>
      <h2 style={{ fontSize: styling.fontSize, fontWeight: styling.fontWeight, color: styling.titleColor, textAlign: "center", margin: 0 }}>
        {config.initialFeedback.title}
      </h2>
      <p style={{ fontSize: "13px", color: styling.subtitleColor, textAlign: "center", margin: 0 }}>
        {config.initialFeedback.subtitle}
      </p>
      <Rating styling={styling} />
    </div>
  );
}

function FeedbackScreen({ config, styling }) {
  const [comment, setComment] = useState("");

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "28px 24px", gap: "20px", overflowY: "auto" }}>
      <h3 style={{ fontSize: "15px", fontWeight: 600, color: styling.titleColor, margin: 0 }}>
        Tell us more
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "12px", fontWeight: 500, color: styling.subtitleColor }}>Additional comments</label>
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
        style={{
          width: styling.buttonWidth,
          height: styling.buttonHeight,
          background: styling.buttonColor,
          color: styling.buttonTextColor,
          border: "none",
          borderRadius: styling.borderRadius,
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
          marginTop: "auto",
        }}
      >
        {config.feedbackPage.submitButtonText}
      </button>
    </div>
  );
}

function ThankYouScreen({ config, styling }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", gap: "14px" }}>
      <div style={{ fontSize: "40px" }}>✅</div>
      <h2 style={{ fontSize: styling.fontSize, fontWeight: styling.fontWeight, color: styling.titleColor, textAlign: "center", margin: 0 }}>
        {config.thankYouPage.title}
      </h2>
      <p style={{ fontSize: "13px", color: styling.subtitleColor, textAlign: "center", margin: 0 }}>
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
        style={{
          width: styling.buttonWidth,
          height: styling.buttonHeight,
          background: styling.buttonColor,
          color: styling.buttonTextColor,
          border: "none",
          borderRadius: styling.borderRadius,
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
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
      <div style={{ ...phoneStyle, background: styling.backgroundColor }}>
        <Screen config={config} styling={styling} />
      </div>

      <div style={navStyle}>
        <button style={navBtnStyle(current === 0)} disabled={current === 0} onClick={() => setCurrent((p) => p - 1)}>
          ← Previous
        </button>
        <span style={{ fontSize: "12px", color: "#9ca3af", alignSelf: "center" }}>{current + 1} / 3</span>
        <button style={navBtnStyle(current === 2)} disabled={current === 2} onClick={() => setCurrent((p) => p + 1)}>
          Next →
        </button>
      </div>
    </div>
  );
}
