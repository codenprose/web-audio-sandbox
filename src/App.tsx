import React from 'react';
import {Howl} from 'howler';

import './App.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

const CLAP_SAMPLE = `${PUBLIC_URL}/samples/clap.mp3`;
const HH_SAMPLE = `${PUBLIC_URL}/samples/hh.mp3`;

// keycodes
const J_KEYCODE = 74;
const SPACEBAR_KEYCODE = 32;

function App() {
  const clap = new Howl({
    src: [CLAP_SAMPLE]
  });

  const hh = new Howl({
    src: [HH_SAMPLE]
  })

  function handleKeydown(e: any) {
    const key = e.which;

    if (key === J_KEYCODE) {
      clap.play();
    }

    if (key === SPACEBAR_KEYCODE) {
      hh.play();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeydown);
    }
  })

  return (
    <div className="App">
      <h1>Web Audio Sandbox</h1>
    </div>
  );
}

export default App;
