import { useState, useEffect, useMemo, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const emojis = ["😠", "😟", "😐", "🙂", "😄"];

export default function Rating({ styling, onChange, ratingType, ratingMedia }) {
  const [selected, setSelected] = useState(null);
  const prevUrlsRef = useRef([null, null, null, null, null]);

  const mediaUrls = useMemo(() => {
    if (ratingType !== "motionful" || !ratingMedia) return [null, null, null, null, null];
    return ratingMedia.map((file) => (file ? URL.createObjectURL(file) : null));
  }, [ratingType, ratingMedia]);

  useEffect(() => {
    const prev = prevUrlsRef.current;
    prev.forEach((url) => { if (url) URL.revokeObjectURL(url); });
    prevUrlsRef.current = mediaUrls;
  }, [mediaUrls]);

  const handleSelect = (index) => {
    setSelected(index);
    if (onChange) onChange(index);
  };

  return (
    <div className="rating-row">
      {emojis.map((emoji, i) => {
        const isActive = selected === i;
        const isLottie = ratingType === "motionful" && ratingMedia?.[i]?.name?.endsWith(".json");
        const hasMedia = ratingType === "motionful" && mediaUrls[i];

        return (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={{
              width: "42px",
              height: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1px",
              border: `1.5px solid ${isActive ? styling.selectedRatingColor : styling.unselectedRatingColor}`,
              borderRadius: "10px",
              background: isActive ? styling.selectedRatingColor + "10" : "#ffffff",
              cursor: "pointer",
              transition: "all 0.12s ease",
              padding: 0,
            }}
          >
            {hasMedia ? (
              isLottie ? (
                <DotLottieReact
                  src={mediaUrls[i]}
                  style={{ width: 22, height: 22 }}
                  autoplay
                  loop
                />
              ) : (
                <img
                  src={mediaUrls[i]}
                  alt={`Rating ${i + 1}`}
                  style={{ width: 22, height: 22, objectFit: "contain", borderRadius: 3 }}
                />
              )
            ) : (
              <span style={{ lineHeight: 1, fontSize: "20px" }}>{emoji}</span>
            )}
            <span
              style={{
                fontSize: "9px",
                fontWeight: 600,
                color: isActive ? styling.selectedRatingColor : "#1e293b",
                lineHeight: 1,
              }}
            >
              {i + 1}
            </span>
          </button>
        );
      })}
    </div>
  );
}
