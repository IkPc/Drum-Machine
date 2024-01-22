import React from 'react';

const DrumPad = ({ id, tabIndex, onClick, src }) => {
  return (
    <div className="drum-pad" id={id} tabIndex={tabIndex} onClick={onClick}>
      <audio className="clip" id={id} src={src}></audio>
    </div>
  );
}

export default DrumPad;
