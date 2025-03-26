import React from "react";

const PaletteDisplay = ({ colors }) => {
  return (
    <div className="grid grid-cols-5 gap-4 p-6">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-20 h-20 rounded-lg shadow-lg"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default PaletteDisplay;
