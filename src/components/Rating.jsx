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
              width: "42px",
              height: "48px",
              fontSize: "20px",
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
            <span style={{ lineHeight: 1 }}>{emoji}</span>
            <span
              style={{
                fontSize: "9px",
                fontWeight: 600,
                color: isActive ? styling.selectedRatingColor : styling.unselectedRatingColor,
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
