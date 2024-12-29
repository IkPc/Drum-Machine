const soundEffect = (audioId) => {
    return (event) => {
      if (!event.key || event.key.toUpperCase() === audioId) {
        const audio = document.getElementById(audioId);
        if (audio) {
          audio.play();
        }
      }
    };
  };


  export default soundEffect;