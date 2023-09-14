import React from "react";

function ColorButtons({ handleColorChange }) {
  const buttonStyles = {
    margin: "5px 0", // Add margin between buttons and adjust vertical spacing
    padding: "8px 16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    background: "transparent",
    display: "block",
    width: "100%", // Ensure buttons take up full width
    textAlign: "center", // Center button text horizontally
  };

  return (
    <div className="color-buttons">
      <p style={{ marginBottom: "10px" }}>Choose a color:</p>
      {/* Buttons to change the board color */}
      <button
        style={{ ...buttonStyles, backgroundColor: "white" }}
        onClick={() => handleColorChange("white")}
      >
        White
      </button>
      <button
        style={{ ...buttonStyles, backgroundColor: "blue" }}
        onClick={() => handleColorChange("blue")}
      >
        Blue
      </button>
      <button
        style={{ ...buttonStyles, backgroundColor: "green" }}
        onClick={() => handleColorChange("green")}
      >
        Green
      </button>
    </div>
  );
}

export default ColorButtons;