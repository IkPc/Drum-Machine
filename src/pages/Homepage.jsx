import React from 'react';
import "./Homepage.css";
import soundEffect from "../utils/soundEffect";
import useDisplayID from "../utils/useDisplayID"; 
import DrumPadMask from '../components/drumPadMask';
import DrumPadData from '../utils/DrumPadData';
import Keyboard from '../utils/Keyboard';

const Homepage = () => {
  const { displayText, handleButtonClick } = useDisplayID();

  const MultFunctions = (audioId, buttonId, event) => {
    const setActiveState = (id) => {
      const button = document.getElementById(id);
      if (button) {
        button.classList.add("active");
        setTimeout(() => {
          button.classList.remove("active");
        }, 100);
      }
    };

    const playAudio = soundEffect(audioId);
    playAudio(event);
  
    setActiveState(buttonId);
    handleButtonClick(buttonId); 
  
    if (event.button === 'true') {
      event.preventDefault();
    }
  };
  

  return (
    <div id="drum-machine">
        <Keyboard MultFunctions={MultFunctions} />
        <div className="padWrapper">
            {DrumPadData.map((pad) => (
                <DrumPadMask
                    key={pad.keyLabel}
                    idDiv={pad.idDiv}
                    onClick={(e) => MultFunctions(pad.keyLabel, pad.idDiv, e)}
                    keyLabel={pad.keyLabel}
                    idAudio={pad.keyLabel}
                    audioLink={pad.audioLink}
                />
            ))}
        </div>
        <div className="displayWrapper">
            <h2>Key Pressed:</h2>
            <div id="display">{displayText}</div>
        </div>
    </div>
  );
}

export default Homepage;