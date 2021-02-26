import React, { useState, useEffect, useRef } from "react";
import Details from "./Details";
import Record from "../imgs/record.png";
import Controls from "./Controls";

export default function Player(props) {
  // targeting the audio element from the element
  const audioEl = useRef(null);

  const [isPlaying, setPlaying] = useState(false);

  // check if the the song is playing in the starting
  useEffect(() => {
    if (isPlaying) {
      // play current song
      audioEl.current.play();
    } else {
      // pause current song
      audioEl.current.pause();
    }
  });

  // if false, go backward
  const SkipSong = (forwards = true) => {
    if (forwards) {
      // set current song, next one
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      // set current song, previous one
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div>
      <div className="parent">
        <img
          className={isPlaying ? "rotate" : "image1"}
          src={Record}
          width="500"
        />
      </div>
      <audio
        ref={audioEl}
        src={props.songs[props.currentSongIndex].src}
        onEnded={() => props.setCurrentSongIndex(props.currentSongIndex + 1)}
      />
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        SkipSong={SkipSong}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
      />
    </div>
  );
}
