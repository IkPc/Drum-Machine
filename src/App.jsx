import React from 'react';
import "./App.css";
import "./components/css/Main.css";
import soundEffect from "./components/basics/soundEffect";
import useDisplayID from "./components/basics/useDisplayID"; 

const App = () => {
  const { displayText, handleButtonClick } = useDisplayID();

  const MultFunctions = (audioId, buttonId, event) => {
    console.log('MultFunctions called:', audioId, buttonId);
  
    const playAudio = soundEffect(audioId);
    playAudio(event);
  
    handleButtonClick(buttonId);
  
    if (event.button === 'true') {
      event.preventDefault();
    }
  };
 
  

  return (
    <div id="drum-machine">
      <div className="padWrapper">
        <div className="drum-pad" id="Heater-1"
        onKeyDown={(e) => MultFunctions("Q", "Heater-1", e)}
        onClick={(e) => MultFunctions("Q", "Heater-1", e)}
        >
          Q
          <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        </div>
        <div className="drum-pad" id="Heater-2" tabIndex="2"
        onKeyDown={(e) => MultFunctions("W", "Heater-2", e)}
        onClick={(e) => MultFunctions("W", "Heater-2", e)}
        >
          W
          <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        </div>
        <div className="drum-pad" id="Heater-3" tabIndex="3"
        onKeyDown={(e) => MultFunctions("E", "Heater-3", e)}
        onClick={(e) => MultFunctions("E", "Heater-3", e)}
        button="true"
        >
          E
          <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        </div>
        <div className="drum-pad" id="Heater-4" tabIndex="4"
        onKeyDown={(e) => MultFunctions("A", "Heater-4", e)}
        onClick={(e) => MultFunctions("A", "Heater-4", e)}
        >
          A
          <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        </div>
        <div className="drum-pad" id="Clap" tabIndex="5"
        onKeyDown={(e) => MultFunctions("S", "Clap", e)}
        onClick={(e) => MultFunctions("S", "Clap", e)}
        >
          S
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        </div>
        <div className="drum-pad" id="Open-HH" tabIndex="6"
        onKeyDown={(e) => MultFunctions("D", "Open-HH", e)}
        onClick={(e) => MultFunctions("D", "Open-HH", e)}
        >
          D
          <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        </div>
        <div className="drum-pad" id="Kick-n'-Hat" tabIndex="7"
        onKeyDown={(e) => MultFunctions("Z", "Kick-n'-Hat", e)}
        onClick={(e) => MultFunctions("Z", "Kick-n'-Hat", e)}
        >
          Z
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        </div>
        <div className="drum-pad" id="Kick" tabIndex="8"
        onKeyDown={(e) => MultFunctions("X", "Kick", e)}
        onClick={(e) => MultFunctions("X", "Kick", e)}
        >
          X
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        </div>
        <div className="drum-pad" id="Closed-HH" tabIndex="9"
        onKeyDown={(e) => MultFunctions("C", "Closed-HH", e)}
        onClick={(e) => MultFunctions("C", "Closed-HH", e)}
        >
          C
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        </div>
      </div>

      <div className="displayWrapper">
        <h2>Key Pressed:</h2>
        <div id="display">{displayText}</div>
      </div>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default AppWrapper;
