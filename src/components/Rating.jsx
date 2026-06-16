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
              height: "42px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1.5px solid ${isActive ? styling.selectedRatingColor : styling.unselectedRatingColor}`,
              borderRadius: "10px",
              background: isActive ? styling.selectedRatingColor + "10" : "#ffffff",
              cursor: "pointer",
              transition: "all 0.12s ease",
            }}
          >
            {emoji}
          </button>
        );
      })}
    </div>
  );
}
