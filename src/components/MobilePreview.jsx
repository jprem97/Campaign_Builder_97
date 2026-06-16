import { useState, useMemo, useEffect } from "react";
import Rating from "./Rating";
import "../styles/MobilePreview.css";

const screenNames = ["Initial Feedback", "Feedback Form", "Thank You"];

function InitialScreen({ config, styling }) {
  return (
    <div className="preview-content">
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${styling.buttonColor}20, ${styling.buttonColor}10)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 4,
        }}
      >
        ⭐
      </div>
      <h2
        style={{
          fontSize: styling.fontSize,
          fontWeight: styling.fontWeight,
          color: styling.titleColor,
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {config.initialFeedback.title}
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: styling.subtitleColor,
          margin: 0,
          lineHeight: 1.5,
          maxWidth: "90%",
        }}
      >
        {config.initialFeedback.subtitle}
      </p>
      <Rating styling={styling} />
    </div>
  );
}

function FeedbackScreen({ config, styling }) {
  const [comment, setComment] = useState("");

  return (
    <div
      className="preview-content"
      style={{ justifyContent: "flex-start", padding: "36px 24px 24px", gap: "18px" }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: styling.titleColor,
          margin: 0,
          width: "100%",
          textAlign: "left",
        }}
      >
        Tell us more
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
        {config.feedbackPage.options.map((opt, i) => (
          <label
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              border: `1.5px solid ${styling.unselectedRatingColor}`,
              borderRadius: styling.borderRadius,
              fontSize: "13px",
              color: styling.titleColor,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: "#ffffff",
            }}
          >
            <input
              type="radio"
              name="feedback-option"
              style={{
                accentColor: styling.buttonColor,
                width: 16,
                height: 16,
              }}
            />
            {opt}
          </label>
        ))}
      </div>

      {config.feedbackPage.additionalCommentToggle && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
          <label
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: styling.subtitleColor,
              textAlign: "left",
            }}
          >
            Additional comments
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type here..."
            style={{
              width: "100%",
              minHeight: "80px",
              padding: "12px 14px",
              fontSize: "13px",
              fontFamily: "inherit",
              color: styling.titleColor,
              border: `1.5px solid ${styling.unselectedRatingColor}`,
              borderRadius: styling.borderRadius,
              resize: "vertical",
              outline: "none",
              background: "#ffffff",
              transition: "border-color 0.2s ease",
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
  const mediaUrl = useMemo(() => {
    if (config.thankYouPage.media) {
      return URL.createObjectURL(config.thankYouPage.media);
    }
    return null;
  }, [config.thankYouPage.media]);

  useEffect(() => {
    return () => {
      if (mediaUrl) URL.revokeObjectURL(mediaUrl);
    };
  }, [mediaUrl]);

  return (
    <div className="preview-content">
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          color: "white",
          boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)",
          marginBottom: 4,
        }}
      >
        ✓
      </div>
      <h2
        style={{
          fontSize: styling.fontSize,
          fontWeight: styling.fontWeight,
          color: styling.titleColor,
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {config.thankYouPage.title}
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: styling.subtitleColor,
          margin: 0,
          lineHeight: 1.5,
          maxWidth: "90%",
        }}
      >
        {config.thankYouPage.subtitle}
      </p>

      {mediaUrl && (
        <div
          style={{
            marginTop: "8px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={mediaUrl}
            alt="Uploaded media"
            style={{
              maxWidth: "100%",
              maxHeight: "120px",
              borderRadius: styling.borderRadius,
              objectFit: "contain",
              border: "1px solid #e2e8f0",
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <span className="screen-label">{screenNames[current]}</span>
      <div className="phone" style={{ background: styling.backgroundColor }}>
        <div className="phone-screen">
          <Screen config={config} styling={styling} />
        </div>
      </div>

      <div className="preview-nav">
        <button disabled={current === 0} onClick={() => setCurrent((p) => p - 1)}>
          ← Prev
        </button>
        <span>{current + 1} / 3</span>
        <button disabled={current === 2} onClick={() => setCurrent((p) => p + 1)}>
          Next →
        </button>
      </div>
    </div>
  );
}
