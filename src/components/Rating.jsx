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
              width: "48px",
              height: "48px",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${isActive ? styling.selectedRatingColor : styling.unselectedRatingColor}`,
              borderRadius: "12px",
              background: isActive ? styling.selectedRatingColor + "12" : "#ffffff",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {emoji}
          </button>
        );
      })}
    </div>
  );
}
