import React from "react";

export default function Details(props) {
  return (
    <>
      <h1>
        <strong>{props.song.title}</strong>
      </h1>
      <h3>
        <strong>
          <span style={{ color: "#E0E0E0" }}>{props.song.artist}</span>
        </strong>
      </h3>
    </>
  );
}
