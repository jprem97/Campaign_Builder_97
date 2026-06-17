import { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Rating from "./Rating";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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
      <Rating
        styling={styling}
        ratingType={config.initialFeedback.ratingType}
        ratingMedia={config.initialFeedback.ratingMedia}
      />
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
    <div
      className="thankyou-media"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        marginTop: "6px",
      }}
    >
      <span style={{ fontSize: "48px", lineHeight: 1 }}>🙏🏽</span>
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: styling.subtitleColor,
          fontFamily: "Inter, sans-serif",
        }}
      >
        We appreciate your feedback!
      </span>
      <span
        style={{
          fontSize: "9px",
          fontWeight: 600,
          color: styling.subtitleColor,
          opacity: 0.8,
          fontFamily: "Inter, sans-serif",
          lineHeight: 1.4,
        }}
      >
        Customize with your own image, GIF, or Lottie animation
      </span>
    </div>
  );
}

function ThankYouScreen({ config, styling }) {
  const [mediaUrl, setMediaUrl] = useState(null);
  const isLottie = config.thankYouPage.media?.name?.endsWith(".json");

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
          isLottie ? (
            <DotLottieReact
              src={mediaUrl}
              style={{
                maxWidth: "80%",
                maxHeight: "120px",
                borderRadius: styling.borderRadius,
              }}
              autoplay
              loop
            />
          ) : (
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
          )
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

async function generatePDF(config) {
  const { styling } = config;
  const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [280, 560] });
  const canvasContainer = document.createElement("div");
  canvasContainer.style.position = "absolute";
  canvasContainer.style.left = "-9999px";
  canvasContainer.style.top = "0";
  document.body.appendChild(canvasContainer);

  for (let i = 0; i < 3; i++) {
    const tempDiv = document.createElement("div");
    tempDiv.style.width = "280px";
    tempDiv.style.height = "560px";
    tempDiv.style.borderRadius = "32px";
    tempDiv.style.overflow = "hidden";
    tempDiv.style.background = styling.backgroundColor;
    tempDiv.style.display = "flex";
    tempDiv.style.flexDirection = "column";
    canvasContainer.appendChild(tempDiv);

    const screenDiv = document.createElement("div");
    screenDiv.style.flex = "1";
    screenDiv.style.display = "flex";
    screenDiv.style.flexDirection = "column";
    screenDiv.style.overflow = "hidden";
    tempDiv.appendChild(screenDiv);

    const root = createRoot(screenDiv);
    const ScreenComp = screens[i];
    root.render(<ScreenComp config={config} styling={styling} />);

    await new Promise((r) => setTimeout(r, 500));

    const canvas = await html2canvas(tempDiv, {
      width: 280,
      height: 560,
      useCORS: true,
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");
    if (i > 0) pdf.addPage([280, 560], "portrait");
    pdf.addImage(imgData, "PNG", 0, 0, 280, 560);

    root.unmount();
    canvasContainer.removeChild(tempDiv);
  }

  document.body.removeChild(canvasContainer);
  pdf.save("mobile-preview.pdf");
}

function FullscreenModal({ config, onClose }) {
  const [current, setCurrent] = useState(0);
  const [generating, setGenerating] = useState(false);
  const phoneRef = useRef(null);
  const { styling } = config;
  const Screen = screens[current];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && current < 2) setCurrent((p) => p + 1);
      if (e.key === "ArrowLeft" && current > 0) setCurrent((p) => p - 1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [current, onClose]);

  const handlePDF = async () => {
    setGenerating(true);
    await generatePDF(config);
    setGenerating(false);
  };

  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <div className="fullscreen-container" onClick={(e) => e.stopPropagation()}>
        <div className="fullscreen-header">
          <span className="fullscreen-title">{screenNames[current]}</span>
          <span className="fullscreen-counter">{current + 1} / 3</span>
          <div className="fullscreen-actions">
            <button
              className="fullscreen-pdf-btn"
              onClick={handlePDF}
              disabled={generating}
            >
              {generating ? "Generating..." : "Download PDF"}
            </button>
            <button className="fullscreen-close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        <div className="fullscreen-preview-area">
          <button
            className="fullscreen-nav-btn fullscreen-nav-left"
            disabled={current === 0}
            onClick={() => setCurrent((p) => p - 1)}
          >
            ‹
          </button>

          <div className="fullscreen-phone" ref={phoneRef} style={{ background: styling.backgroundColor }}>
            <div className="fullscreen-phone-screen">
              <Screen config={config} styling={styling} />
            </div>
          </div>

          <button
            className="fullscreen-nav-btn fullscreen-nav-right"
            disabled={current === 2}
            onClick={() => setCurrent((p) => p + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MobilePreview({ config }) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [generating, setGenerating] = useState(false);
  const { styling } = config;
  const Screen = screens[current];

  const handlePDF = async () => {
    setGenerating(true);
    await generatePDF(config);
    setGenerating(false);
  };

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

      <div className="preview-bottom-actions">
        <button className="fullscreen-btn" onClick={() => setIsFullscreen(true)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
          Full Screen
        </button>
        <button className="fullscreen-btn" onClick={handlePDF} disabled={generating}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <polyline points="9 15 12 12 15 15" />
          </svg>
          {generating ? "Generating..." : "Download PDF"}
        </button>
      </div>

      {isFullscreen && (
        <FullscreenModal config={config} onClose={() => setIsFullscreen(false)} />
      )}
    </div>
  );
}
