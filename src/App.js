import { useState, useEffect } from "react";
import "./App.css";

import Player from "./components/Player";
import playlist from "./songs";

function App() {
  // update songs
  const [songs] = useState(playlist);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  // only call when a new current song index is set
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <div className="heading">
        <h3 className="neon">Music House</h3>
      </div>

      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </>
  );
}

export default App;
