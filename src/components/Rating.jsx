import { useState } from "react";

const emojis = ["😠", "😟", "😐", "🙂", "😄"];

export default function Rating({ styling, onChange }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    if (onChange) onChange(index);
  };

  return (
    <div className="rating-row">
      {emojis.map((emoji, i) => {
        const isActive = selected === i;
        return (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={{
              width: "52px",
              height: "52px",
              fontSize: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2.5px solid ${isActive ? styling.selectedRatingColor : styling.unselectedRatingColor}`,
              borderRadius: "16px",
              background: isActive
                ? `linear-gradient(135deg, ${styling.selectedRatingColor}20, ${styling.selectedRatingColor}10)`
                : "#ffffff",
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: isActive ? "scale(1.12)" : "scale(1)",
              boxShadow: isActive
                ? `0 4px 12px ${styling.selectedRatingColor}30`
                : "0 1px 3px rgba(0, 0, 0, 0.06)",
            }}
          >
            {emoji}
          </button>
        );
      })}
    </div>
  );
}
