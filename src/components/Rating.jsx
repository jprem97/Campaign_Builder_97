import { useState } from "react";

const emojis = ["😠", "😟", "😐", "🙂", "😄"];

export default function Rating({ styling, onChange }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    if (onChange) onChange(index);
  };

  return (
    <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
      {emojis.map((emoji, i) => {
        const isActive = selected === i;
        return (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={{
              width: "48px",
              height: "48px",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${isActive ? styling.selectedRatingColor : styling.unselectedRatingColor}`,
              borderRadius: "50%",
              background: isActive ? styling.selectedRatingColor + "15" : "transparent",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {emoji}
          </button>
        );
      })}
    </div>
  );
}
