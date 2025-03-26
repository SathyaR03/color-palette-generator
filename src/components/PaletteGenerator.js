import React from "react";
import PaletteDisplay from "./PaletteDisplay";

class PaletteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.generateColors(),
    };
  }

  generateColors = () => {
    return Array.from({ length: 5 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  generateNewPalette = () => {
    this.setState({ colors: this.generateColors() });
  };

  render() {
    return (
      <div className="flex flex-col items-center p-6">
        <PaletteDisplay colors={this.state.colors} />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={this.generateNewPalette}
        >
          Generate New Palette
        </button>
      </div>
    );
  }
}

export default PaletteGenerator;
