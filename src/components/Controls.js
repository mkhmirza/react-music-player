import React from "react";

export default function Controls(props) {
  function play() {
    props.setPlaying(!props.isPlaying);
    console.log(props.isPlaying);
  }

  return (
    <>
      <button class="btn" onClick={() => props.SkipSong(false)}>
        Backward
      </button>
      <button class="btn" onClick={play}>
        {props.isPlaying ? "Stop" : "Start"}
      </button>
      <button class="btn" onClick={() => props.SkipSong()}>
        Forward
      </button>
    </>
  );
}
