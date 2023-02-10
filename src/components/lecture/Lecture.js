import React from "react";

export default function Lecture() {
  return (
    <div className="lecture">
      {/* ovo je sve dinamicki */}
      <h2>Multimedijski sustavi</h2>
      <div className="date">
        <span className="time">16:00-17:00</span>
        <span>&middot;</span>
        <span className="classroom">B401</span>
      </div>
      <div className="type color-blue"></div>
    </div>
  );
}
