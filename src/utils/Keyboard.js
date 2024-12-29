import { useEffect } from "react";
import DrumPadData from "./DrumPadData";

const Keyboard = ({ MultFunctions }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      const button = document.getElementById(key);

      if (button) {
        const pad = DrumPadData.find((pad) => pad.keyLabel === key);
        if (pad) {
          const audioId = pad.keyLabel;
          const buttonId = pad.idDiv;
          MultFunctions(audioId, buttonId, event);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [MultFunctions]);

  return null;
};

export default Keyboard;