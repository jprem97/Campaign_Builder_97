import { useState, useEffect } from "react";
import Rating from "./Rating";
import "../styles/MobilePreview.css";

const screenNames = ["Initial Feedback", "Feedback Form", "Thank You"];

function InitialScreen({ config, styling }) {
  return (
    <div className="preview-content">
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: styling.buttonColor + "12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          marginBottom: 2,
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
          fontSize: "12px",
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
      style={{ justifyContent: "flex-start", padding: "28px 20px 20px", gap: "14px" }}
    >
      <h3
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: styling.titleColor,
          margin: 0,
          width: "100%",
          textAlign: "left",
        }}
      >
        Tell us more
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%" }}>
        {config.feedbackPage.options.map((opt, i) => (
          <label
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              padding: "9px 12px",
              border: `1px solid ${styling.unselectedRatingColor}`,
              borderRadius: styling.borderRadius,
              fontSize: "12px",
              color: styling.titleColor,
              cursor: "pointer",
              background: "#ffffff",
            }}
          >
            <input
              type="radio"
              name="feedback-option"
              style={{ accentColor: styling.buttonColor, width: 14, height: 14 }}
            />
            {opt}
          </label>
        ))}
      </div>

      {config.feedbackPage.additionalCommentToggle && (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
          <label
            style={{
              fontSize: "11px",
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
              minHeight: "64px",
              padding: "9px 11px",
              fontSize: "12px",
              fontFamily: "inherit",
              color: styling.titleColor,
              border: `1px solid ${styling.unselectedRatingColor}`,
              borderRadius: styling.borderRadius,
              resize: "vertical",
              outline: "none",
              background: "#ffffff",
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

function ThankYouMedia({ styling }) {
  return (
    <svg
      className="thankyou-media"
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "80%", maxWidth: "200px", height: "auto" }}
    >
      <rect x="10" y="10" width="180" height="120" rx="12" fill={styling.buttonColor + "10"} stroke={styling.buttonColor + "20"} strokeWidth="1" />

      <circle cx="100" cy="55" r="28" fill={styling.buttonColor + "15"} />
      <circle cx="100" cy="55" r="20" fill={styling.buttonColor + "25"} />
      <path
        d="M90 55l6 6 14-14"
        stroke={styling.buttonColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="45" cy="30" r="4" fill={styling.buttonColor + "30"} />
      <circle cx="155" cy="25" r="3" fill={styling.buttonColor + "25"} />
      <circle cx="35" cy="90" r="3" fill={styling.buttonColor + "20"} />
      <circle cx="165" cy="95" r="4" fill={styling.buttonColor + "25"} />
      <circle cx="70" cy="115" r="2.5" fill={styling.buttonColor + "20"} />
      <circle cx="130" cy="110" r="3" fill={styling.buttonColor + "25"} />

      <path d="M50 20l3-6 3 6" stroke={styling.buttonColor + "40"} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M150 15l2.5-5 2.5 5" stroke={styling.buttonColor + "35"} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M160 110l3-5 3 5" stroke={styling.buttonColor + "35"} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 105l2.5-5 2.5 5" stroke={styling.buttonColor + "30"} strokeWidth="1.5" strokeLinecap="round" />

      <text x="100" y="105" textAnchor="middle" fill={styling.subtitleColor} fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
        Thank you!
      </text>
    </svg>
  );
}

function ThankYouScreen({ config, styling }) {
  const [mediaUrl, setMediaUrl] = useState(null);

  useEffect(() => {
    if (config.thankYouPage.media) {
      const url = URL.createObjectURL(config.thankYouPage.media);
      setMediaUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setMediaUrl(null);
    }
  }, [config.thankYouPage.media]);

  return (
    <div className="preview-content">
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#ecfdf5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#16a34a",
          marginBottom: 2,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
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
          fontSize: "12px",
          color: styling.subtitleColor,
          margin: 0,
          lineHeight: 1.5,
          maxWidth: "90%",
        }}
      >
        {config.thankYouPage.subtitle}
      </p>

      <div
        className="thankyou-media-container"
        style={{
          marginTop: "6px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {mediaUrl ? (
          <img
            src={mediaUrl}
            alt="Uploaded media"
            className="thankyou-media"
            style={{
              maxWidth: "80%",
              maxHeight: "120px",
              borderRadius: styling.borderRadius,
              objectFit: "contain",
              border: "1px solid #e5e7eb",
            }}
          />
        ) : (
          <ThankYouMedia styling={styling} />
        )}
      </div>

      <button
        className="preview-btn"
        style={{
          width: styling.buttonWidth,
          height: styling.buttonHeight,
          background: styling.buttonColor,
          color: styling.buttonTextColor,
          borderRadius: styling.borderRadius,
          marginTop: "6px",
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
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
