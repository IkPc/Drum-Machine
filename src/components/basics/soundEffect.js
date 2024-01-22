const soundEffect = (audioId) => {
    return (event) => {
      console.log('Key pressed:', event.key);
      if (!event.key || event.key.toUpperCase() === audioId) {
        const audio = document.getElementById(audioId);
        if (audio) {
          console.log('Playing audio:', audioId);
          audio.play();
        }
      }
    };
  };


  export default soundEffect;