import React, { useState } from 'react';
import './App.css';

function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);

  const playAudio = () => {
    const audio = new Audio('/Recording.m4a'); // Update the file path if necessary
    audio.play();
    setAudioPlaying(true);

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg" className="App-logo" alt="logo" />
        <p>
          monkey
        </p>
        <button
          className="App-link"
          onClick={playAudio}
          disabled={audioPlaying}
        >
          Play Audio
        </button>
      </header>
    </div>
  );
}

export default App;